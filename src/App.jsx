import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DashboardLayout from './components/DashboardLayout';
import { fetchPatients } from './services/patientService';
import './App.css';

function App() {
  const [_patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const patients = await fetchPatients();
      const jessicaTaylor = patients.find(patient => 
        patient.name.toLowerCase().includes('jessica') && 
        patient.name.toLowerCase().includes('taylor')
      );
      setPatientData(jessicaTaylor || null);
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const _handleRefresh = () => {
    loadData();
  };

  return (
    <div className="app">
      <Header />
      <DashboardLayout />
      {loading && <div className="loading">Loading patient data...</div>}
    </div>
  );
}

export default App
