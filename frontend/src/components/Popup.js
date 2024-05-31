import React from 'react';
import './style.css';

const Popup = ({ data, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">

    <div className="bg-white p-6 rounded-lg shadow-xl relative transition-all duration-300 transform hover:scale-105">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-150 ease-in-out"
      >
        &times;
      </button>
      <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Interest Information</h3>
      <p className="text-lg text-gray-700 mb-2">Interest Rate: <span className="font-semibold">{data?.interest_rate}%</span></p>
      <p className="text-lg text-gray-700">Interest Amount: <span className="font-semibold">${data?.interest_amount?.toFixed(2)}</span></p>
    </div>

  </div>
);

export default Popup;