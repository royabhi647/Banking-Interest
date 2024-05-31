import React, { useState } from 'react';
import './style.css';

const DepositDetails = ({ onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    depositAmount: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const { depositAmount, duration } = formData;
    return depositAmount && duration;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-white text-center">Deposit Details</h2>
      <form className='container'>
        <div className="mb-4">
          <label className="block text-white">Deposit Amount <span className='text-red-600'>*</span></label>
          <input
            type="number"
            name="depositAmount"
            placeholder='Enter Deposit Amount'
            value={formData.depositAmount}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white">Duration (days) <span className='text-red-600'>*</span></label>
          <input
            type="number"
            name="duration"
            placeholder='Enter Duration (days)'
            value={formData.duration}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="mt-4 bg-gray-500 text-white p-2 rounded"
          >
            Back
          </button>
          <button
            type="button"
            disabled={!validateForm()}
            onClick={() => onSubmit(formData)}
            className={`mt-4 bg-blue-500 text-white p-2 rounded ${!validateForm() && 'opacity-50 cursor-not-allowed'}`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepositDetails;