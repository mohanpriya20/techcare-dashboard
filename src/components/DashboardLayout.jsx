import React, { useState } from 'react';
import PatientsList from './PatientsList';
import DiagnosisHistory from './DiagnosisHistory';
import DiagnosticList from './DiagnosticList';
import PatientInfo from './PatientInfo';
import LabResults from './LabResults';
import './DashboardLayout.css';

const DashboardLayout = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="dashboard-layout">
      {/* Left Column - Patients */}
      <div className="dashboard-column">
        <PatientsList onPatientSelect={handlePatientSelect} />
      </div>
      
      {/* Middle Column - Diagnosis History and Diagnostic List */}
      <div className="dashboard-column">
        <div className="middle-sections">
          <div className="section-container">
            <DiagnosisHistory patientData={selectedPatient} />
          </div>
          <div className="section-container">
            <DiagnosticList patientData={selectedPatient} />
          </div>
        </div>
      </div>
      
      {/* Right Column - Patient Info and Lab Results */}
      <div className="dashboard-column">
        <div className="right-sections">
          <div className="section-container">
            <PatientInfo patientData={selectedPatient} />
          </div>
          <div className="section-container">
            <LabResults patientData={selectedPatient} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout; 