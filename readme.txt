# Transit Accessibility Visualization Project

This project visualizes accessibility disparities in the NYC subway system, specifically focusing on journeys from Penn Station to Jay St-MetroTech.

## Setup Instructions

1. Clone or download this repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
accessibility-project/
├── src/
│   ├── components/
│   │   ├── JourneyTimeComparison.js
│   │   ├── PhysicalEffortMap.js
│   │   └── ReliabilityContrast.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Key Features

- Interactive journey time comparison
- Physical effort visualization mapping
- Infrastructure reliability analysis
- Real data from MTA and NYC Council sources

## Technologies Used

- React 18.2
- Recharts for data visualization
- Tailwind CSS for styling
- Real MTA and NYC accessibility data

## Build for Production

To create a production build:
```bash
npm run build
```

The build is minified and ready to be deployed.

## Data Sources

- MTA Elevator & Escalator Status API
- NYC Council Accessibility Data
- Jay St-MetroTech Accessible Station Lab Documentation (2019-2020)

## License

MIT License