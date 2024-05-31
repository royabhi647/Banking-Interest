import React, { useState } from 'react';
import Information from './components/Information';
import DepositDetails from './components/DepositDetails';
import Popup from './components/Popup';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [customerData, setCustomerData] = useState({});
  const [depositData, setDepositData] = useState({});
  const [popupData, setPopupData] = useState(null);

  const handleNext = (data) => {
    setCustomerData(data);
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (data) => {
    setDepositData(data);
    const response = await fetch('http://localhost:3001/api/fetch_interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...customerData, ...data }),
    });
    const result = await response.json();
    setPopupData(result);
  };

  return (
    <div className="mx-auto p-4">
      {currentStep === 1 && <Information onNext={handleNext} />}
      {currentStep === 2 && <DepositDetails onBack={handleBack} onSubmit={handleSubmit} />}
      {popupData && <Popup data={popupData} onClose={() => setPopupData(null)} />}
    </div>
  );
};

export default App;