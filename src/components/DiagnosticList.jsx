import React from 'react';
import './DiagnosticList.css';

const DiagnosticList = ({ patientData }) => {
  const getStatusClass = (status) => {
    const statusLower = status.toLowerCase();
    if (statusLower.includes('actively being treated')) return 'actively-treated';
    if (statusLower.includes('untreated')) return 'untreated';
    if (statusLower.includes('under observation')) return 'under-observation';
    if (statusLower.includes('cured')) return 'cured';
    if (statusLower.includes('inactive')) return 'inactive';
    if (statusLower.includes('managed')) return 'managed';
    return 'default';
  };

  return (
    <div className="diagnostic-list-section">
      <h3>Diagnostic List</h3>
      <div className="diagnostic-table">
        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patientData?.diagnostic_list?.map((diagnosis, index) => (
              <tr key={index}>
                <td>{diagnosis.name}</td>
                <td>{diagnosis.description}</td>
                <td>
                  <span className={`status ${getStatusClass(diagnosis.status)}`}>
                    {diagnosis.status}
                  </span>
                </td>
              </tr>
            )) || (
              <tr>
                <td colSpan="3">No diagnostic data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList; 