import React from 'react';
import respiratoryRateIcon from '../assets/diagnosis-history/respiratory rate.svg';
import temperatureIcon from '../assets/diagnosis-history/temperature.svg';
import heartRateIcon from '../assets/diagnosis-history/HeartBPM.svg';
import './VitalSigns.css';

const VitalSigns = ({ patientData }) => {
  // Get latest vital signs from the most recent diagnosis
  const getLatestVitalSigns = () => {
    if (!patientData?.diagnosis_history || patientData.diagnosis_history.length === 0) {
      return {
        respiratory_rate: { value: 0, unit: 'bpm', status: 'Normal' },
        temperature: { value: 0, unit: '°F', status: 'Normal' },
        heart_rate: { value: 0, unit: 'bpm', status: 'Normal' }
      };
    }

    // Sort by date and get the most recent
    const sortedHistory = [...patientData.diagnosis_history].sort((a, b) => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];
      const aIndex = months.indexOf(a.month) + (a.year * 12);
      const bIndex = months.indexOf(b.month) + (b.year * 12);
      return bIndex - aIndex; // Newest first
    });

    const latestDiagnosis = sortedHistory[0];
    
    return {
      respiratory_rate: {
        value: latestDiagnosis.respiratory_rate?.value || 20,
        unit: 'bpm',
        status: latestDiagnosis.respiratory_rate?.levels || 'Normal'
      },
      temperature: {
        value: latestDiagnosis.temperature?.value || 98.6,
        unit: '°F',
        status: latestDiagnosis.temperature?.levels || 'Normal'
      },
      heart_rate: {
        value: latestDiagnosis.heart_rate?.value || 78,
        unit: 'bpm',
        status: latestDiagnosis.heart_rate?.levels || 'Normal'
      }
    };
  };

  const vitalSigns = getLatestVitalSigns();

  return (
    <section className="vital-signs-section">
      <div className="vital-signs-container">
        <div className="vital-sign-card respiratory-rate">
          <div className="vital-sign-icon">
            <img src={respiratoryRateIcon} alt="Respiratory Rate" />
          </div>
          <div className="vital-sign-content">
            <h3 className="vital-sign-title">Respiratory Rate</h3>
            <div className="vital-sign-value">
              {vitalSigns.respiratory_rate.value} {vitalSigns.respiratory_rate.unit}
            </div>
            <div className="vital-sign-status">
              {vitalSigns.respiratory_rate.status}
            </div>
          </div>
        </div>

        <div className="vital-sign-card temperature">
          <div className="vital-sign-icon">
            <img src={temperatureIcon} alt="Temperature" />
          </div>
          <div className="vital-sign-content">
            <h3 className="vital-sign-title">Temperature</h3>
            <div className="vital-sign-value">
              {vitalSigns.temperature.value}{vitalSigns.temperature.unit}
            </div>
            <div className="vital-sign-status">
              {vitalSigns.temperature.status}
            </div>
          </div>
        </div>

        <div className="vital-sign-card heart-rate">
          <div className="vital-sign-icon">
            <img src={heartRateIcon} alt="Heart Rate" />
          </div>
          <div className="vital-sign-content">
            <h3 className="vital-sign-title">Heart Rate</h3>
            <div className="vital-sign-value">
              {vitalSigns.heart_rate.value} {vitalSigns.heart_rate.unit}
            </div>
            <div className="vital-sign-status">
              {vitalSigns.heart_rate.status}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitalSigns; 