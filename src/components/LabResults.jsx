import React from 'react';
import './LabResults.css';
import downloadIcon from '../assets/download.png';

const LabResults = ({ patientData }) => {
  return (
    <div className="lab-results-section">
      <h3>Lab Results</h3>
      <div className="lab-list">
        {patientData?.lab_results?.map((labResult, index) => (
          <div key={index} className="lab-item">
            <span>{labResult}</span>
            <img src={downloadIcon} alt="Download" className="download-icon" />
          </div>
        )) || (
          <div className="lab-item">
            <span>No lab results available</span>
            <img src={downloadIcon} alt="Download" className="download-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LabResults; 