import React from 'react';

const Navbar = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <div className='text-2xl font-bold'>
          Jaime Manzueta
        </div>
        <div className='flex space-x-6'>
          <a href='#hero' className='hover:text-gray-400 transition-colors duration-300'>Home</a>
          <a href='#abouts' className='hover:text-gray-400 transition-colors duration-300'>About Me</a>
          <a href='#services' className='hover:text-gray-400 transition-colors duration-300'>Proficiencies</a>
          <a href='#projects' className='hover:text-gray-400 transition-colors duration-300'>Projects</a>
        </div>
        <div>
          <button
            onClick={handleContactClick}
            className='bg-gradient-to-r from-gray-400 to-blue-500 text-white 
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact Me 
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
