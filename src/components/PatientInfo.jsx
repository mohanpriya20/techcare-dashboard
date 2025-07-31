import React from 'react';
import './PatientInfo.css';
import birthIcon from '../assets/patient-info/BirthIcon.svg';
import femaleIcon from '../assets/patient-info/FemaleIcon.svg';
import phoneIcon from '../assets/patient-info/PhoneIcon.svg';
import insuranceIcon from '../assets/patient-info/InsuranceIcon.svg';

const PatientInfo = ({ patientData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
  };
  return (
    <div className="patient-info-section">
      <div className="patient-profile">
        <div className="profile-avatar">
          {patientData?.profile_picture ? (
            <img src={patientData.profile_picture} alt={patientData.name} />
          ) : (
            getInitials(patientData?.name || '')
          )}
        </div>
        <h3 className="profile-name">{patientData?.name || 'Patient Name'}</h3>
        <div className="profile-details">
          <div className="detail-item">
            <div className="detail-icon">
              <img src={birthIcon} alt="Date of Birth" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Date Of Birth</div>
              <div className="detail-value">{patientData?.date_of_birth ? formatDate(patientData.date_of_birth) : 'N/A'}</div>
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">
              <img src={femaleIcon} alt="Gender" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Gender</div>
              <div className="detail-value">{patientData?.gender || 'N/A'}</div>
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">
              <img src={phoneIcon} alt="Contact Info" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Contact Info.</div>
              <div className="detail-value">{patientData?.phone_number || 'N/A'}</div>
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">
              <img src={phoneIcon} alt="Emergency Contacts" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Emergency Contacts</div>
              <div className="detail-value">{patientData?.emergency_contact || 'N/A'}</div>
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">
              <img src={insuranceIcon} alt="Insurance Provider" />
            </div>
            <div className="detail-content">
              <div className="detail-label">Insurance Provider</div>
              <div className="detail-value">{patientData?.insurance_type || 'N/A'}</div>
            </div>
          </div>
        </div>
        <button className="show-all-btn">Show All Information</button>
      </div>
    </div>
  );
};

export default PatientInfo; 