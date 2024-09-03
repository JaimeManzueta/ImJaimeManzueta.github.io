import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='flex space-x-6'>
          <a 
            href='https://www.linkedin.com/in/jaimemanzueta' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='text-gray-400 hover:text-gray-200 transition-colors duration-300'
          >
            LinkedIn
          </a>
          <a 
            href='https://github.com/JaimeManzueta' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='text-gray-400 hover:text-gray-200 transition-colors duration-300'
          >
            GitHub
          </a>
        </div>
        <p className='mt-4 text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} Jaime Manzueta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
