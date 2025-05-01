import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from './assests/hero-bg.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './home.css'; 

const Home: React.FC = () => {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundColor: 'transparent',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-6xl font-bold text-black mb-4 md:mx-2">
            Hi, I aḿ
            <span className="block text-7xl">Cristian 🎨</span>
          </h1>
          <p className="text-gray-700 mb-8 max-w-lg mx-auto md:mx-2">
            I am a UI/UX Designer, I like to make interfaces simple and aesthetically pleasing for users. The idea is not to create an interface for creating it, it is that users prefer you because your product is easy to use.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 md:mx-2">
            <button className="bg-purple-600 text-white px-20 py-4 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
              <span className="relative top-1">i</span>Contact Me!
              <span className=' w-6 h-6 rounded-full border-[2px] border-white flex items-center justify-center ml-2'>
              <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
