import React from 'react';
import BloodPressureChart from './BloodPressureChart';
import VitalSigns from './VitalSigns';
import './DiagnosisHistory.css';

const DiagnosisHistory = ({ patientData }) => {
  return (
    <div className="diagnosis-history-section">
      <div className="diagnosis-history-header">
        <div className="diagnosis-history-title">
          <h3>Diagnosis History</h3>
        </div>
      </div>
      <div className="diagnosis-history-content">
        <div className="diagnosis-history-chart">
          <BloodPressureChart patientData={patientData} />
          <VitalSigns patientData={patientData} />
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory; 