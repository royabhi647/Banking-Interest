import React, { useState } from 'react';
import './style.css';

const Information = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim()
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, mobile } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    return firstName && lastName && emailRegex.test(email) && mobileRegex.test(mobile);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-white text-center">Customer Information</h2>
      <form className='container'>
        <div className="mb-4">
          <label className="block text-white">First Name <span className='text-red-600'>*</span></label>
          <input
            type="text"
            name="firstName"
            placeholder='Enter First Name'
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Last Name <span className='text-red-600'>*</span></label>
          <input
            type="text"
            name="lastName"
            placeholder='Enter Last Name'
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Email <span className='text-red-600'>*</span></label>
          <input
            type="email"
            name="email"
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Mobile <span className='text-red-600'>*</span></label>
          <input
            type="text"
            name="mobile"
            placeholder='Enter Mobile No.'
            value={formData.mobile}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <button
          type="button"
          disabled={!validateForm()}
          onClick={() => onNext(formData)}
          className={`mt-4 bg-blue-500 text-white p-2 rounded w-full ${!validateForm() && 'opacity-50 cursor-not-allowed'}`}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Information;