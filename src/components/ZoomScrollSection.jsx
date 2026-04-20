import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ZoomScrollSection
 * Wraps a section with a "zoom-into-card → reveal next section" effect.
 * 
 * As you scroll:
 *  1. The section sits at scale(1) and full opacity.
 *  2. When scrolling OUT the section scales UP (zooms in) and fades out,
 *     giving the impression you are flying "through" the panel.
 *  3. The next section is already waiting behind it.
 */
export default function ZoomScrollSection({ children, id }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // While the section is scrolling OUT of view → zoom in + fade out
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

  return (
    <section
      id={id}
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        style={{ scale, opacity, y }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
