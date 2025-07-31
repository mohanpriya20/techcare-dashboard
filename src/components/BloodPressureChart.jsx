import React from 'react';
import './BloodPressureChart.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart = ({ patientData }) => {

  // Process patient data to create chart data
  const processChartData = () => {
    if (!patientData?.diagnosis_history) {
      return {
        labels: [],
        systolicData: [],
        diastolicData: [],
        latestSystolic: { value: 0, levels: 'Normal' },
        latestDiastolic: { value: 0, levels: 'Normal' }
      };
    }

    // Sort diagnosis history by date (newest first)
    const sortedHistory = [...patientData.diagnosis_history].sort((a, b) => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                     'July', 'August', 'September', 'October', 'November', 'December'];
      const aIndex = months.indexOf(a.month) + (a.year * 12);
      const bIndex = months.indexOf(b.month) + (b.year * 12);
      return bIndex - aIndex; // Newest first
    });

    // Filter to show only last 6 months
    const filteredHistory = sortedHistory.slice(0, 6);

    // Reverse for chart display (oldest to newest)
    const chartHistory = filteredHistory.reverse();

    const labels = chartHistory.map(item => `${item.month.substring(0, 3)}, ${item.year}`);
    const systolicData = chartHistory.map(item => item.blood_pressure.systolic.value);
    const diastolicData = chartHistory.map(item => item.blood_pressure.diastolic.value);

    // Get latest values (last in the chart array)
    const latestSystolic = chartHistory[chartHistory.length - 1]?.blood_pressure.systolic || { value: 0, levels: 'Normal' };
    const latestDiastolic = chartHistory[chartHistory.length - 1]?.blood_pressure.diastolic || { value: 0, levels: 'Normal' };

    return {
      labels,
      systolicData,
      diastolicData,
      latestSystolic,
      latestDiastolic
    };
  };

  const chartInfo = processChartData();

  const chartData = {
    labels: chartInfo.labels,
    datasets: [
             {
         label: 'Systolic',
         data: chartInfo.systolicData,
         tension: 0.4,
         pointBackgroundColor: '#E66FD2',
         pointBorderColor: '#fff',
         pointBorderWidth: 2,
         pointRadius: 6,
       },
             {
         label: 'Diastolic',
         data: chartInfo.diastolicData,
         tension: 0.4,
         pointBackgroundColor: '#8C6FE6',
         pointBorderColor: '#fff',
         pointBorderWidth: 2,
         pointRadius: 6,
       },
    ],
  };

     const options = {
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
       legend: {
         display: false,
       },
       title: {
         display: false,
       },
     },
         scales: {
       y: {
         beginAtZero: false,
         min: 60,
         max: 180,
         grid: {
           color: '#e2e8f0',
         },
         ticks: {
           font: {
             family: 'Manrope',
             size: 12,
             weight: 'normal',
           },
           color: '#072635',
         },
       },
       x: {
         grid: {
           display: false,
         },
         ticks: {
           font: {
             family: 'Manrope',
             size: 12,
             weight: 'normal',
           },
           color: '#072635',
         },
       },
     },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

     return (
     <section className="chart-section">
       <div className="chart-container">
         <div className="chart-wrapper">
           <Line 
             data={chartData} 
             options={options} 
             style={{ marginTop: '45px' }}
           />
         </div>
         <div className="bp-summary-section">
           <div className="bp-summary-card systolic">
             <div className="bp-summary-header">
               <span className="bp-summary-icon systolic"></span>
               <span className="bp-summary-label">Systolic</span>
             </div>
             <div className="bp-summary-value">{chartInfo.latestSystolic.value}</div>
             <div className="bp-summary-status">
               <i className={`fas fa-caret-${chartInfo.latestSystolic.levels.includes('Higher') ? 'up' : 'down'} bp-status-icon`}></i>
               <span>{chartInfo.latestSystolic.levels}</span>
             </div>
           </div>
           <div className="bp-summary-card diastolic">
             <div className="bp-summary-header">
               <span className="bp-summary-icon diastolic"></span>
               <span className="bp-summary-label">Diastolic</span>
             </div>
             <div className="bp-summary-value">{chartInfo.latestDiastolic.value}</div>
             <div className="bp-summary-status">
               <i className={`fas fa-caret-${chartInfo.latestDiastolic.levels.includes('Higher') ? 'up' : 'down'} bp-status-icon`}></i>
               <span>{chartInfo.latestDiastolic.levels}</span>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
};

export default BloodPressureChart; 