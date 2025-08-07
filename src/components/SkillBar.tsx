import React, { useEffect, useState } from 'react';
import { motion, useInView as useFramerInView, useAnimation } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number; // 0-100
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useFramerInView(ref, { once: true, threshold: 0.2 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      setWidth(level);
      controls.start({ width: `${level}%`, opacity: 1 });
    }
  }, [controls, isInView, level]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-light">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;