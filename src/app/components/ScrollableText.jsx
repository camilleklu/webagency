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
            <Phrase src={src} font={font} text={text} separator={separator}  images={images} color={color} separatorColor={separatorColor}/>
            <Phrase src={src} font={font} text={text} separator={separator} images={images} color={color} separatorColor={separatorColor}/>
            <Phrase src={src} font={font} text={text} separator={separator} images={images} color={color} separatorColor={separatorColor}/>
            <Phrase src={src} font={font} text={text} separator={separator} images={images} color={color} separatorColor={separatorColor}/>
            <Phrase src={src} font={font} text={text} separator={separator} images={images} color={color} separatorColor={separatorColor}/>
        </motion.div>
    )
}
const Phrase = ({src, text, separator, images, font, color, separatorColor}) => {
    if(!images) {
        return(
            <div className="flex gap-5 px-5 items-center">
                <p className={`text-[5.5vw] font-[${font}]`} style={{color: color}}>{text} 
                    <span className="text-[5.5vw]" style={{color: separatorColor}}>&nbsp;{separator}</span>
                </p>
            </div>
        )
    }
    else {
        return (
            <div className="flex gap-5 px-5 items-center">
                <p className="text-[7.5vw]">{text}</p>
                <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
                    <Image style={{objectFit:"cover"}} src={src} alt="image" fill/>
                </span>
            </div>
        )
    }
}