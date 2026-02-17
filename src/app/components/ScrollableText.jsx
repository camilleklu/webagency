"use client"
import { useTransform, motion, useScroll } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function ScrollableText({images=false, separator=["."], font="Inter", text=["Front end developer"], color="#FFFFFF", separatorColor="#FFFFFF" ,left=[15, 45, 60]}){
    const container = useRef()
    const { scrollYProgress } = useScroll({
        target:container,
        offset:['start end', 'end start']
    })   
    if(separator.length===1 && text.length > 1) {
        separator = Array(text.length).fill(separator[0])
    }
    return (
        <div className="overflow-hidden" ref={container}>         
            {separator.map((separator, i) => (             
                <Lines key={i} src={separator} images={images} font={font} left={`-${left[i]}%`} separator={separator} progress={scrollYProgress} text={text[i] || text[0]} direction={i % 2 === 0 ? "left" : "right"} color={color} separatorColor={separatorColor}/>
            ))}
        </div>
    )
}

const Lines = ({src, left, progress, direction="left", text, separator, images, font, color, separatorColor}) => {
    const dir = direction == "left" ? 1 : -1
    const x = useTransform(progress, [0,1], [-1000 *dir , 1000 *dir])
    return(
        <motion.div style={{left, x}} className="flex relative whitespace-nowrap">
            {[...Array(9)].map((_, i) => (
                 <Phrase key={i} src={src} font={font} text={text} separator={separator} images={images} color={color} separatorColor={separatorColor}/>
            ))}
        </motion.div>
    )
}
const Phrase = ({src, text, separator, images, font, color, separatorColor}) => {
    // On définit des classes de base (mobile) et on augmente pour les écrans plus larges
    const textStyle = { color: color, fontFamily: font };
    const separatorStyle = { color: separatorColor, fontFamily: font };

    if(!images) {
        return(
            <div className="flex gap-5 px-5 items-center">
                {/* sm: 2.5rem | md: 4rem | lg: 6rem (ajustable selon tes besoins) */}
                <p className="text-[1.75rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[6rem] uppercase" style={textStyle}>
                    {text} 
                    <span className="text-[1.75rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[6rem]" style={separatorStyle}>
                        &nbsp;{separator}
                    </span>
                </p>
            </div>
        )
    }
    else {
        return (
            <div className="flex gap-5 px-5 items-center">
                {/* sm: 5rem | md: 8rem | lg: 10rem */}
                <p className="text-[5rem] md:text-[8rem] lg:text-[10rem] uppercase">
                    {text}
                </p>
                <span className="relative h-[5rem] md:h-[8rem] lg:h-[10rem] aspect-[4/2] rounded-full overflow-hidden">
                    <Image style={{objectFit:"cover"}} src={src} alt="image" fill/>
                </span>
            </div>
        )
    }
}