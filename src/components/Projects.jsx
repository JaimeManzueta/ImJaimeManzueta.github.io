import React from 'react';

const Projects = () => {
  const projectList = [
    {
      name: 'JobManager',
      url: 'https://github.com/JaimeManzueta/JobManager',
      description: 'A Python application for managing job postings and applications efficiently.'
    },
    {
      name: 'Company-Webscraper',
      url: 'https://github.com/JaimeManzueta/Company-Webscraper',
      description: 'A web scraping tool to collect and analyze company data from the web.'
    },
    {
      name: 'Grading-System',
      url: 'https://github.com/JaimeManzueta/Grading-System',
      description: 'A system designed to streamline the grading process for educators.'
    }
  ];

  return (
    <div className='bg-black text-white py-20' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h1 className='text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-blue-500'>
          Projects
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectList.map((project, index) => (
            <div key={index} className='bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
              <h2 className='text-2xl font-bold mb-2 text-white'>{project.name}</h2>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <a 
                href={project.url} 
                target='_blank' 
                rel='noopener noreferrer' 
                className='text-blue-400 hover:text-blue-500 transition-colors duration-300'
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
