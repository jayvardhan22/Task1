import React from 'react';
import { motion } from 'framer-motion';
import bgImage from './assests/skills-bg-Photoroom.png';
import CircularProgress from '@mui/material/CircularProgress';

const skills = [
  { name: 'Figma / Adobe XD', percentage: 90 },
  { name: 'UI Design', percentage: 80 },
  { name: 'Information Architecture', percentage: 80 },
  { name: 'UX Design', percentage: 70 },
  { name: 'Prototyping', percentage: 70 },
  { name: 'Box Model', percentage: 70 },
  { name: 'Business Model Canvas', percentage: 70 },
  { name: 'Design Systems', percentage: 70 },
];

const Skills: React.FC = () => {
  return (
    <div
      id="skills"
      className="min-h-screen w-full bg-white bg-no-repeat bg-center relative scroll-mt-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: '100% 102%',
      }}
    >
      <div className="absolute top-7 left-20 z-20 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
        Skills
      </div>

      <div className="relative z-10 container mx-auto px-20 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center bg-white bg-opacity-20 p-6 rounded-lg"
            >
              <div className="relative w-32 h-32 mb-4 flex items-center justify-center">
                
                <div className="absolute w-[120px] h-[120px] flex items-center justify-center shadow-lg rounded-full">
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    size={120}
                    thickness={6}
                    sx={{
                      color: '#E5E7EB',
                    }}
                  />
                </div>

                <CircularProgress
                  variant="determinate"
                  value={skill.percentage}
                  size={120}
                  thickness={6}
                  sx={{
                    color: '#8B5CF6', // Purple color
                    position: 'absolute',
                    transform: 'rotate(-30deg)', // To rotate starting point slightly
                    '& .MuiCircularProgress-circle': {
                      strokeLinecap: 'round', // Rounded ends
                    },
                  }}
                />

                <div className="absolute text-black text-xl font-semibold">
                  {skill.percentage}%
                </div>
              </div>

              <h3 className="text-black text-center font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
