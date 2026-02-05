'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TextReveal({ children, shadow = true }) {
  const words = children.split(" ");
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start 0.9", "end 0.25"]
  });


  return (
      <motion.p
        ref={container}
        className='text-xl relative'
        style={{ overflow: 'hidden', display: 'flex', gap: '4px', flexWrap: 'wrap' }}
      >
        {words.map((word, index) => {
          const start = index / words.length;
          const end = start + (1 / words.length);
          return <Word key={index} progress={scrollYProgress} shadow={shadow} index={index} range={[start, end]}>{word}</Word>;
        })}
      </motion.p>
  );
}

const Word = ({ children, progress, shadow, range }) => {
  const opacity = useTransform(progress, range, [0,1]);
  return(
    <span>
      <span className={`absolute ${shadow ? 'opacity-[0.3]' : 'opacity-0'} text-xl gap-[4px]`}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}