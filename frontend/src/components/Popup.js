import React from 'react';

const Popup = ({ data, onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
    <div className="bg-white p-4 rounded shadow-lg relative">
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
        &times;
      </button>
      <h3 className="text-xl font-bold mb-2">Interest Information</h3>
      <p>Interest Rate: {data?.interest_rate}%</p>
      <p>Interest Amount: ${data?.interest_amount?.toFixed(2)}</p>
    </div>
  </div>
);

export default Popup;