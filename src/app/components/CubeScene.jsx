"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// OrbitControls supprimé car inutile et désactivé dans ton code original
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export default function CubeScene() {
  const mountRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Refs pour l'animation et la souris
  const requestRef = useRef(null);
  const timeRef = useRef(0);
  
  // Optimisation FPS
  const lastFrameTime = useRef(0);
  
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const baseRotationRef = useRef({ x: 0, y: 0 });

  // Variables de cleanup
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const materialsRef = useRef([]); // Pour nettoyer proprement les matériaux
  const texturesRef = useRef([]); // Pour nettoyer les textures

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- CONFIGURATION PERFORMANCES ---
    // Limite les FPS pour sauver la batterie (30 à 60 sont suffisants pour du décor)
    const FPS_LIMIT = 45; 
    const FRAME_INTERVAL = 1000 / FPS_LIMIT;

    // --- GESTION DE LA SOURIS ---
    const onMouseMove = (event) => {
      // Optimisation : ne pas recalculer si la fenêtre est minimisée
      if (document.hidden) return;
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // --- LOADING MANAGER ---
    const loadingManager = new THREE.LoadingManager(
      () => setIsLoading(false),
      undefined,
      (error) => {
        console.error("Erreur :", error);
        setIsLoading(false);
      }
    );

    // --- SCENE ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.6);
    sceneRef.current = scene;

    const texLoader = new THREE.TextureLoader(loadingManager);

    // --- CLOUD BACKGROUND ---
    const cloudTexture = texLoader.load("/cloud.png");
    texturesRef.current.push(cloudTexture);
    cloudTexture.wrapS = cloudTexture.wrapT = THREE.RepeatWrapping;

    const cloudMaterial = new THREE.MeshBasicMaterial({
      map: cloudTexture,
      color: 0x8866aa,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
      fog: false,
    });
    materialsRef.current.push(cloudMaterial);

    const cloudGeometry = new THREE.PlaneGeometry(40, 30, 1, 1);
    const cloudPlane = new THREE.Mesh(cloudGeometry, cloudMaterial);
    cloudPlane.position.set(0, 0, -9);
    scene.add(cloudPlane);

    // --- CAMERA ---
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 12);

    // --- RENDERER (OPTIMISÉ) ---
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // L'antialias est géré par le post-processing ou inutile avec le bloom
      powerPreference: "default", // "high-performance" force le GPU à fond, "default" laisse l'OS gérer
      stencil: false,
      depth: true,
      precision: "mediump", // "mediump" suffit souvent et consomme moins que "highp"
    });
    
    // OPTIMISATION CRITIQUE : Limiter le pixel ratio à 1.5 max. 
    // Sur un écran Retina/4k, 2 ou 3 tue la batterie pour un gain visuel minime avec du Bloom.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.setClearColor(0x000000, 1);
    renderer.useLegacyLights = false;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- POSTPROCESSING ---
    // Optimisation : Désactiver le buffer stencil pour le composer
    const renderTarget = new THREE.WebGLRenderTarget(
        container.clientWidth,
        container.clientHeight,
        { 
          minFilter: THREE.LinearFilter, 
          magFilter: THREE.LinearFilter, 
          format: THREE.RGBAFormat,
          stencilBuffer: false // Pas besoin de stencil ici
        }
    );

    const composer = new EffectComposer(renderer, renderTarget);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    // Optimisation : Résolution du bloom peut être plus basse que l'écran (ex: division par 2 si très critique)
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.5,
      0.4,
      0.85
    );
    composer.addPass(bloomPass);
    composerRef.current = composer;

    // --- LIGHTS ---
    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xc87de2, 9.5);
    rimLight.position.set(-4, -3, -5);
    scene.add(rimLight);

    const rimLight2 = new THREE.DirectionalLight(0xc87de2, 2.5);
    rimLight2.position.set(2, 6, -5);
    scene.add(rimLight2);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    // --- TEXTURES & MATERIALS ---
    const loadTexture = (path, repeat = 1) => {
        const t = texLoader.load(path);
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        if(repeat !== 1) t.repeat.set(repeat, repeat);
        texturesRef.current.push(t);
        return t;
    };

    const noiseRoughness = loadTexture("./noise.jpg", 0.5);
    const rockyNormal = loadTexture("./normal.jpg", 2.5);
    const displacementMap = loadTexture("./noise.jpg", 0.005);

    const iceMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc87de2,
      metalness: 0.0,
      emissive: 0x000000,
      roughness: 1,
      roughnessMap: noiseRoughness,
      transmission: 1.0, // C'est la propriété la plus coûteuse
      thickness: 0.5,
      ior: 1.33,
      transparent: true,
      opacity: 1,
      clearcoat: 0.1,
      clearcoatRoughness: 0.02,
      clearcoatRoughnessMap: noiseRoughness,
      normalMap: rockyNormal,
      normalScale: new THREE.Vector2(0.4, 0.4),
      displacementMap,
      displacementScale: 0.1,
      displacementBias: -0.1,
      attenuationColor: new THREE.Color(0xc87de2),
      attenuationDistance: 1.5,
    });
    materialsRef.current.push(iceMaterial);

    let exrTexture = null;
    new EXRLoader(loadingManager).load("/studio.exr", (tex) => {
      tex.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = tex;
      exrTexture = tex;
      iceMaterial.envMap = tex;
      iceMaterial.envMapIntensity = 2.0;
      iceMaterial.needsUpdate = true;
    });

    // --- GEOMETRY ---
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: new THREE.Color(0xc87de2),
      emissiveIntensity: 100,
      metalness: 0.1,
      roughness: 0.05,
      toneMapped: false,
    });
    materialsRef.current.push(innerMaterial);

    const lGroup = new THREE.Group();
    const barThickness = 0.05;
    const longSide = 0.3;
    
    const verticalGeo = new THREE.BoxGeometry(barThickness, longSide, barThickness);
    const verticalMesh = new THREE.Mesh(verticalGeo, innerMaterial);
    verticalMesh.position.set(-0.02, 0, 0);
    
    const horizontalGeo = new THREE.BoxGeometry(0.1, barThickness, barThickness);
    const horizontalMesh = new THREE.Mesh(horizontalGeo, innerMaterial);
    horizontalMesh.position.set(0.05, -0.125, 0);

    lGroup.add(verticalMesh);
    lGroup.add(horizontalMesh);
    rootGroup.add(lGroup);

    // --- LOAD GLB ---
    const gltfLoader = new GLTFLoader(loadingManager);
    gltfLoader.load("/cube10_optimized.glb", (gltf) => {
      const loadedModel = gltf.scene;
      loadedModel.scale.set(0.152, 0.152, 0.152);
      
      const box = new THREE.Box3().setFromObject(loadedModel);
      const center = new THREE.Vector3();
      box.getCenter(center);
      loadedModel.position.sub(center);

      loadedModel.traverse((child) => {
        if (child.isMesh) {
          child.material = iceMaterial;
          // Désactiver ombres si non utilisées pour perf
          child.castShadow = false;
          child.receiveShadow = false; 
        }
      });
      rootGroup.add(loadedModel);
    });

    // --- ANIMATION CONFIG ---
    let introZoom = true;
    let introProgress = 0;
    const introDuration = 2.2;
    const startZ = 12;
    const baseTarget = 1.8;
    let targetZoomZ = baseTarget;

    const updateTargetZoom = () => {
      const width = container.clientWidth;
      targetZoomZ = width < 600 ? 2.6 : baseTarget;
    };
    updateTargetZoom();

    // --- LOOP OPTIMISÉE ---
    const animate = (time) => {
      requestRef.current = requestAnimationFrame(animate);

      // Calcul du delta time pour limiter les FPS
      const deltaTime = time - lastFrameTime.current;

      if (deltaTime >= FRAME_INTERVAL) {
        // Ajustement pour caler au multiple de l'intervalle le plus proche
        lastFrameTime.current = time - (deltaTime % FRAME_INTERVAL);

        // Mise à jour du temps logique de l'animation
        // On utilise un delta fixe (0.016) ou calculé pour l'animation interne
        // pour garder la vitesse constante peu importe les FPS réels.
        const internalDelta = 0.016; 
        timeRef.current += internalDelta;

        // --- LOGIQUE D'ANIMATION (identique à l'original) ---
        baseRotationRef.current.x -= 0.0004;
        baseRotationRef.current.y += 0.001;

        targetMouseRef.current.x += (mouseRef.current.x - targetMouseRef.current.x) * 0.05;
        targetMouseRef.current.y += (mouseRef.current.y - targetMouseRef.current.y) * 0.05;

        lGroup.lookAt(camera.position);

        const mouseInfluence = 0.35;
        rootGroup.rotation.x = baseRotationRef.current.x + targetMouseRef.current.y * mouseInfluence;
        rootGroup.rotation.y = baseRotationRef.current.y + targetMouseRef.current.x * mouseInfluence;

        const cloudParallaxIntensity = 1.0;
        cloudPlane.position.x = targetMouseRef.current.x * -cloudParallaxIntensity;
        cloudPlane.position.y = targetMouseRef.current.y * cloudParallaxIntensity * 0.5;

        const pulse = 3.9 + 3.9 * Math.sin(timeRef.current * 1.0);
        innerMaterial.emissiveIntensity = pulse;

        cloudTexture.offset.x += 0.0003;
        cloudTexture.offset.y += 0.00015;

        if (introZoom) {
          introProgress += internalDelta / introDuration;
          if (introProgress >= 1) introProgress = 1;
          const t = introProgress * introProgress * (3 - 2 * introProgress);
          camera.position.z = startZ + (targetZoomZ - startZ) * t;
          if (introProgress === 1) introZoom = false;
        }

        // Rendu
        composer.render();
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    // --- RESIZE ---
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      
      updateTargetZoom();
      
      camera.fov = width < 600 ? 60 : 50;
      cloudPlane.scale.set(
        camera.aspect > 1 ? camera.aspect * 1.2 : 1.2,
        camera.aspect > 1 ? 1.2 : (1 / camera.aspect) * 1.2,
        1
      );
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
      composer.setSize(width, height);
      bloomPass.setSize(width, height); // Important de update le bloom aussi
    };
    window.addEventListener("resize", onResize);

    // --- CLEANUP ---
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);

      // Disposal complet
      if (composerRef.current) composerRef.current.dispose();
      
      // Nettoyage manuel des textures et matériaux
      texturesRef.current.forEach(t => t.dispose());
      materialsRef.current.forEach(m => m.dispose());
      if (exrTexture) exrTexture.dispose();

      if (sceneRef.current) {
        sceneRef.current.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
            else obj.material.dispose();
          }
        });
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full fixed inset-0">
      <div ref={mountRef} className="w-full h-full" />
      {isLoading && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/80">
          <div className="flex flex-col items-center gap-3 text-white">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" />
            <p className="text-sm tracking-wide text-sky-100">Loading icy rock…</p>
          </div>
        </div>
      )}
    </div>
  );
}