import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
}

export const BlurText = ({ text, className }: BlurTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });
  
  const words = text.split(" ");
  
  const containerVariants = {
    hidden: {},
    visible: {},
  };

  const wordVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 50 },
    visible: { 
        filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
        opacity: [0, 0.5, 1],
        y: [50, -5, 0],
        transition: {
            duration: 0.7,
            ease: "easeOut",
            times: [0, 0.5, 1]
        }
    }
  };

  return (
    <p ref={ref} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={i}
          transition={{ delay: i * 0.1 }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};
