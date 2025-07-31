import React from 'react';

const Analytics = ({ patientData }) => {
  if (!patientData) {
    return (
      <section className="analytics-section">
        <div className="analytics-grid">
          <div className="analytics-card">
            <div className="analytics-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="analytics-content">
              <h3 className="analytics-number">--</h3>
              <p className="analytics-label">Total Patients</p>
            </div>
          </div>
          <div className="analytics-card">
            <div className="analytics-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <div className="analytics-content">
              <h3 className="analytics-number">--</h3>
              <p className="analytics-label">Active Patients</p>
            </div>
          </div>
          <div className="analytics-card">
            <div className="analytics-icon">
              <i className="fas fa-heart"></i>
            </div>
            <div className="analytics-content">
              <h3 className="analytics-number">--</h3>
              <p className="analytics-label">Avg Blood Pressure</p>
            </div>
          </div>
          <div className="analytics-card">
            <div className="analytics-icon">
              <i className="fas fa-thermometer-half"></i>
            </div>
            <div className="analytics-content">
              <h3 className="analytics-number">--</h3>
              <p className="analytics-label">Avg Temperature</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="analytics-section">
      <div className="analytics-grid">
        <div className="analytics-card">
          <div className="analytics-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="analytics-content">
            <h3 className="analytics-number">1</h3>
            <p className="analytics-label">Total Patients</p>
          </div>
        </div>
        <div className="analytics-card">
          <div className="analytics-icon">
            <i className="fas fa-calendar-check"></i>
          </div>
          <div className="analytics-content">
            <h3 className="analytics-number">1</h3>
            <p className="analytics-label">Active Patients</p>
          </div>
        </div>
        <div className="analytics-card">
          <div className="analytics-icon">
            <i className="fas fa-heart"></i>
          </div>
          <div className="analytics-content">
            <h3 className="analytics-number">{patientData.bloodPressure || '--'}</h3>
            <p className="analytics-label">Avg Blood Pressure</p>
          </div>
        </div>
        <div className="analytics-card">
          <div className="analytics-icon">
            <i className="fas fa-thermometer-half"></i>
          </div>
          <div className="analytics-content">
            <h3 className="analytics-number">{patientData.temperature || '--'}</h3>
            <p className="analytics-label">Avg Temperature</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics; 