import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import eventImage from './assests/eventos.png';
import portalImage from './assests/mi-portal.png';
import acAppImage from './assests/Bannera&c 1.png';
import lineImage from './assests/Group.png';
import './portfolio.css';

const projects = [
  {
    title: 'Eventos Premium',
    description: 'Elegante - Serio - Estatus',
    image: eventImage,
  },
  {
    title: 'Mi Portal U',
    description: 'Amigable - Dashboard - Simple',
    image: portalImage,
  },
  {
    title: 'A&C App',
    description: 'Elegante - Serio - Estatus',
    image: acAppImage,
  },
];

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <div id="portfolio" className="relative">
      <div className="relative bg-navy-900 pb-32 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-28 text-left"
          >
          </motion.div>
        </div>
        <div className="custom-shape-divider-bottom-1745828721">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="bg-white pb-20 relative">
        <h1 className="text-6xl font-bold text-purple-400 mb-2 text-left z-10 relative left-10">
          Portfolio
        </h1>

        <div className="mb-8">
          <img
            src={lineImage}
            alt="Decorative Line"
            className="h-5 px-14 ml-10 "
          />
        </div>

        <div className="max-w-screen-xl mx-auto px-6">
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide w-full flex justify-start items-center"
          >
            <div className="flex space-x-14 w-max px-16 py-6">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="scale-[1] hover:scale-[1.1] transition-all duration-300 hover:border-[1px] hover:border-[#ffecc8] hover:rounded-lg hover:cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pt-24 w-80 flex-shrink-0"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[260px] h-[160px] rounded-xl overflow-hidden z-10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    <div className="bg-white rounded-xl shadow-xl p-10 pt-20 text-left">
                      <h3 className="text-2xl font-poppins text-purple-600 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
