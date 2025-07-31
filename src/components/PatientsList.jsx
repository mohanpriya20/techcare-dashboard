import React, { useState, useEffect, useRef } from 'react';
import { fetchPatients } from '../services/patientService';
import searchIcon from '../assets/search.svg';
import ellipsisIcon from '../assets/ellipsis.svg';
import './PatientsList.css';

const PatientsList = ({ onPatientSelect }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const hasAutoSelected = useRef(false);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        setLoading(true);
        const patientsData = await fetchPatients();
        setPatients(patientsData);
        
        // Auto-select the first patient only once
        if (patientsData.length > 0 && !hasAutoSelected.current) {
          hasAutoSelected.current = true;
          setSelectedPatient(patientsData[0]);
          onPatientSelect(patientsData[0]);
        }
      } catch (err) {
        setError('Failed to load patients');
        console.error('Error loading patients:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    onPatientSelect(patient);
  };

  if (loading) {
    return (
      <div className="patients-section">
        <div className="patients-header">
          <h3>Patients</h3>
          <i className="fas fa-search"></i>
        </div>
        <div className="patients-list">
          <div className="loading-message">Loading patients...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="patients-section">
        <div className="patients-header">
          <h3>Patients</h3>
          <i className="fas fa-search"></i>
        </div>
        <div className="patients-list">
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="patients-section">
      <div className="patients-header">
        <div className="header-title">
          <h3>Patients</h3>
          <span className="patient-count">({patients.length})</span>
        </div>
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>
      <div className="patients-list">
        {patients.map((patient, index) => (
          <div 
            key={index} 
            className={`patient-item ${selectedPatient?.name === patient.name ? 'active' : ''}`}
            onClick={() => handlePatientClick(patient)}
          >
            <div className="patient-avatar">
              {patient.profile_picture ? (
                <img 
                  src={patient.profile_picture} 
                  alt={patient.name} 
                  className="patient-avatar-img"
                />
              ) : (
                getInitials(patient.name)
              )}
            </div>
            <div className="patient-info">
              <div className="patient-name">{patient.name}</div>
              <div className="patient-details">{patient.gender}, {patient.age}</div>
            </div>
            <img src={ellipsisIcon} alt="More options" className="ellipsis-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsList; 