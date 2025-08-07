import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  isLeft?: boolean;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  organization,
  period,
  location,
  description,
  isLeft = false,
  delay = 0,
}) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row items-center md:gap-x-12 relative mb-12 md:mb-0`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {/* Timeline center line (only visible on md and up) */}
      <div className="hidden md:block absolute h-full w-0.5 bg-accent/30 left-1/2 -translate-x-1/2 top-0 z-0"></div>
      
      {/* Circle connector */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-accent z-10 shadow-lg shadow-accent/20"></div>

      {/* Content container */}
      <div 
        className={`card w-full md:w-5/12 relative z-10 ${
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        }`}
      >
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <h4 className="text-lg font-medium text-secondary mb-2">{organization}</h4>
        
        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400 mb-4 gap-y-1 sm:gap-y-0 sm:gap-x-4">
          <div className="flex items-center">
            <CalendarIcon size={16} className="mr-1 text-accent" />
            <span>{period}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon size={16} className="mr-1 text-accent" />
            <span>{location}</span>
          </div>
        </div>
        
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default TimelineItem;