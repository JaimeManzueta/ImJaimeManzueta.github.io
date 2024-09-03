import React from 'react';
import HeroImage from '../assets/profupdated.png';
import Resume from '../assets/practiceResume.pdf';

const Hero = () => {
  return (
    <div className="bg-white text-black px-8 md:px-16 lg:px-24 py-12">
      <div className="flex justify-center mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-white rounded-full -z-10"></div>
        <img 
          src={HeroImage} 
          alt='Profile' 
          className='w-48 h-48 rounded-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-105'
          style={{ width: '300px', height: 'auto', borderRadius: '50%' }}
        />
      </div>
      <h1 className="text-4xl font-bold text-center">
        I'm {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-500">
          Jaime Manzueta
        </span>, Software Engineer
      </h1>
      <p className='mt-4 text-lg text-gray-700 text-center'>
  I specialize in creating efficient data pipelines, managing databases, and crafting data visualizations using tools like Pandas and Matplotlib. My goal is to transform complex data into actionable insights that enhance decision-making and improve business processes.
</p>

      <div className="mt-8 flex justify-center">
        <a 
          href={Resume} 
          download="Jaime_Manzueta_Resume.pdf" 
          className="bg-gradient-to-r from-gray-400 to-blue-500 text-white 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
