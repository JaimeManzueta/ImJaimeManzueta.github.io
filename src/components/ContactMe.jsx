import React from 'react';

const Contact = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100 p-8' id="contact">
      <div className='bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl'>
        <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>Contact Me</h1>
        <form
          action='https://formspree.io/f/xgvwdgze' 
          method='POST'
          className='space-y-6'
        >
          <div>
            <label htmlFor='name' className='block text-lg font-medium text-gray-700'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              required
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-lg font-medium text-gray-700'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='message' className='block text-lg font-medium text-gray-700'>Message</label>
            <textarea
              id='message'
              name='message'
              rows='6'
              required
              className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            ></textarea>
          </div>
          <button 
            type='submit' 
            className='bg-gradient-to-r from-gray-400 to-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
