'use client'

const smokeBlobs = [
  // Gauche (8)
  { width: 500, height: 500, top: "5%", left: "-8%", color: "#D070E5", blur: 150, opacity: 0.08 },
  { width: 400, height: 400, top: "20%", left: "-10%", color: "#F42CFF", blur: 120, opacity: 0.06 },
  { width: 450, height: 450, top: "35%", left: "-5%", color: "#D070E5", blur: 140, opacity: 0.06 },
  { width: 380, height: 380, top: "50%", left: "-8%", color: "#F42CFF", blur: 130, opacity: 0.05 },
  { width: 420, height: 420, bottom: "35%", left: "-6%", top: "auto", color: "#D070E5", blur: 135, opacity: 0.06 },
  { width: 350, height: 350, top: "70%", left: "-3%", color: "#F42CFF", blur: 100, opacity: 0.05 },
  { width: 460, height: 460, bottom: "15%", left: "-10%", top: "auto", color: "#D070E5", blur: 145, opacity: 0.05 },
  { width: 320, height: 320, top: "85%", left: "2%", color: "#F42CFF", blur: 110, opacity: 0.04 },
  // Droite (8)
  { width: 600, height: 600, top: "5%", right: "-10%", left: "auto", color: "#F42CFF", blur: 180, opacity: 0.06 },
  { width: 480, height: 480, top: "18%", right: "-6%", left: "auto", color: "#D070E5", blur: 140, opacity: 0.06 },
  { width: 550, height: 550, top: "35%", right: "-8%", left: "auto", color: "#F42CFF", blur: 160, opacity: 0.07 },
  { width: 400, height: 400, top: "48%", right: "-5%", left: "auto", color: "#D070E5", blur: 125, opacity: 0.05 },
  { width: 520, height: 520, bottom: "38%", right: "-7%", left: "auto", top: "auto", color: "#F42CFF", blur: 155, opacity: 0.06 },
  { width: 450, height: 450, top: "68%", right: "-4%", left: "auto", color: "#D070E5", blur: 135, opacity: 0.05 },
  { width: 500, height: 500, bottom: "12%", right: "-9%", left: "auto", top: "auto", color: "#F42CFF", blur: 150, opacity: 0.05 },
  { width: 360, height: 360, top: "82%", right: "1%", left: "auto", color: "#D070E5", blur: 115, opacity: 0.04 },
];

export function SmokeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {smokeBlobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.width,
            height: blob.height,
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: `blur(${blob.blur}px)`,
            opacity: blob.opacity,
          }}
        />
      ))}
    </div>
  );
}
