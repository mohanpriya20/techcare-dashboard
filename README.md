# Tech Care Dashboard

A healthcare dashboard built with React that shows patient information, blood pressure charts, vital signs, and lab results.

## What it does

- Shows a list of patients on the left
- Displays patient info, diagnosis history, and lab results
- Blood pressure chart with trends over time
- Vital signs monitoring (heart rate, temperature, respiratory rate)
- Diagnostic list with status indicators

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

## Tech Stack

- React.js
- Vite (build tool)
- Chart.js (for blood pressure charts)
- Axios (API calls)
- CSS (styling)

## API

The app connects to the Coalition Technologies API to fetch patient data. You'll need to set up environment variables for authentication.

Create a `.env` file in the root directory:
```env
VITE_API_USERNAME=your_username
VITE_API_PASSWORD=your_password
```


## Features

- Patient List: Select different patients to view their data
- Blood Pressure Chart: Interactive chart showing trends over 6 months
- Vital Signs: Real-time monitoring of key health metrics
- Lab Results: Downloadable lab test results
- Diagnostic List: Patient diagnoses with status tracking

## Build

To create a production build:
```bash
npm run build
```

That's it! The dashboard should work right out of the box.
