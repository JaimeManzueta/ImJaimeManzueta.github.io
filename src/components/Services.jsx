import React from 'react';

const services = [
  {
    id: 1,
    title: 'JavaScript',
    description: 'I have a strong foundation in JavaScript, with experience in ES6+ syntax and React.',
  },
  {
    id: 2,
    title: 'React',
    description: 'I have experience building reusable and scalable React components, as well as working with state and props.',
  },
  {
    id: 3,
    title: 'Data Visualization',
    description: 'I have experience creating data visualizations using libraries like D3.js, Chart.js, and Plotly.js.',
  },
  {
    id: 4,
    title: 'Data Pipelines',
    description: 'I have experience designing and implementing data pipelines using tools like Apache Kafka, Apache Beam, and Apache Flink.',
  },
];

const Service = () => {
  return (
    <div className='bg-blue-400 text-white py-20' id='services'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-500 to-black'>
          Proficiencies
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div key={service.id} className='p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <h3 className='text-2xl font-bold mb-4 text-gray-300 hover:text-blue-300 transition-colors duration-300'>
                {service.title}
              </h3>
              <p className='text-gray-200'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
