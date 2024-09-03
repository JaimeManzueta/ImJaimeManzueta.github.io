import React from 'react';
import AboutImage from '../assets/aboutscreenshot.png';
import PythonLogo from '../assets/pythonlogo.png';
import NosqlLogo from '../assets/nosqllogo.png';   
import HtmlCssLogo from '../assets/htmlcsslogo.png'; 
import VisualizationLogo from '../assets/visualizationlogo.png'; 

const GradientProgressBar = ({ label, widthClass }) => {
  return (
    <div className='relative w-full h-6 bg-gray-800 rounded-full overflow-hidden'>
      <div 
        className={`absolute left-0 top-0 h-full bg-gradient-to-r from-gray-400 to-blue-500 rounded-full 
        transition-all duration-500 transform hover:scale-110 ${widthClass}`}
      ></div>
      <span className='absolute left-0 w-full h-full flex items-center justify-center text-white font-semibold text-xs'>
        {label}
      </span>
    </div>
  );
};

const Abouts = () => {
  return (
    <div className='bg-black text-white py-20' id='abouts'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-extrabold text-center mb-12 tracking-wide'>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-500">
            About Me
          </span>
        </h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img 
            src={AboutImage} 
            alt='About Image' 
            className='w-72 h-72 rounded-lg object-cover mb-8 md:mb-0 shadow-lg' 
          />
          <div className='flex-1'>
            <p className='text-lg mb-8 leading-relaxed'>
            "I’m Jaime, a Computer Science student specializing in Database Management and Data Visualization. I’m looking for opportunities to apply my skills in data pipelines, database management, and visualization to help organizations make informed decisions and improve business outcomes."








            </p>
            <div className='space-y-6'>
              <div className="flex items-center space-x-4">
                <img src={PythonLogo} alt="Python Logo" className='w-8 h-8' />
                <GradientProgressBar label="Python" widthClass="w-11/12" />
              </div>
              <div className="flex items-center space-x-4">
                <img src={NosqlLogo} alt="NoSQL Logo" className='w-8 h-8' />
                <GradientProgressBar label="Database/NoSQL" widthClass="w-9/12" />
              </div>
              <div className="flex items-center space-x-4">
                <img src={VisualizationLogo} alt="Data Visualization Logo" className='w-8 h-8' />
                <GradientProgressBar label="Data Visualization" widthClass="w-8/12" />
              </div>
              <div className="flex items-center space-x-4">
                <img src={HtmlCssLogo} alt="HTML & CSS Logo" className='w-8 h-8' />
                <GradientProgressBar label="HTML & CSS" widthClass="w-8/12" />
              </div>
              <div className='flex flex-col items-center space-y-4 mt-8'>
                <div className='flex items-center space-x-8'>
                  <div className='text-center'>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-500'>
                      2+
                    </h3>
                    <p className='text-sm'>Years Experience</p>
                  </div>
                  <div className='text-center'>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-500'>
                      8
                    </h3>
                    <p className='text-sm'>Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouts;
