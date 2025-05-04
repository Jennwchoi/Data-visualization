import React, { useState } from 'react';

const stationLayoutReal = {
  width: 800,
  height: 400,
  paths: [
    {
      type: 'standard',
      points: [
        {x: 50, y: 200, effort: 1, name: 'Penn Station 7th Ave Entrance', note: 'Elevator equipped'},
        {x: 110, y: 200, effort: 2, name: 'Main Concourse Navigation', note: 'Crowded during rush hour'},
        {x: 200, y: 200, effort: 3, name: 'A/C Platform Access', note: 'Multiple options available'},
        {x: 500, y: 200, effort: 1, name: 'Train Ride (A/C)', note: '10 minute direct service'},
        {x: 600, y: 200, effort: 2, name: 'Jay St-MetroTech Platform', note: 'Accessible Station Lab features'},
        {x: 700, y: 200, effort: 1, name: 'Jay St & Willoughby Exit', note: 'NW corner elevator location'}
      ],
      totalDistance: 650,
      directDistance: 650,
      calories: 42
    },
    {
      type: 'wheelchair',
      points: [
        {x: 50, y: 250, effort: 2, name: 'Find Accessible Entrance', note: '7th Ave (2023) or 8th Ave elevators'},
        {x: 90, y: 250, effort: 4, name: 'Elevator Wait', note: 'Based on outage data: 4-6 days/month'},
        {x: 150, y: 270, effort: 3, name: 'Navigate to Platform Elevator', note: 'Complex Penn Station layout'},
        {x: 220, y: 270, effort: 5, name: 'Second Elevator Wait', note: 'Track access elevators often crowded'},
        {x: 270, y: 250, effort: 4, name: 'Platform Gap Navigation', note: 'Documented safety concern'},
        {x: 500, y: 250, effort: 2, name: 'Train Ride', note: 'Accessible car available'},
        {x: 600, y: 250, effort: 4, name: 'Jay St Exit Navigation', note: 'Must find specific elevator'},
        {x: 700, y: 250, effort: 3, name: 'Exit via NW Elevator', note: 'May have wait during peak'}
      ],
      totalDistance: 850,
      directDistance: 650,
      calories: 98
    },
    {
      type: 'visuallyImpaired',
      points: [
        {x: 50, y: 150, effort: 3, name: 'Locate Penn Station Entry', note: 'Limited tactile guides at entrances'},
        {x: 110, y: 150, effort: 5, name: 'Navigate Crowded Concourse', note: 'Penn Station: 600k+ daily passengers'},
        {x: 200, y: 150, effort: 4, name: 'Find Platform Using Audio', note: 'Penn audio announcements available'},
        {x: 500, y: 150, effort: 2, name: 'Train Ride Navigation', note: 'Metro announcements help with stops'},
        {x: 600, y: 150, effort: 4, name: 'Use Tactile Guideways', note: 'Jay St Lab features: blue tiles with raised bars'},
        {x: 650, y: 150, effort: 5, name: 'Braille Signage Navigation', note: 'Tested at decision points in Station Lab'},
        {x: 700, y: 150, effort: 3, name: 'Exit via Guided Path', note: 'Way-finding stripes on floors'}
      ],
      totalDistance: 750,
      directDistance: 650,
      calories: 78
    }
  ]
};

const effortLevels = [
  { level: 1, description: 'Easy - No barriers', examples: 'Wide corridors, clear paths' },
  { level: 2, description: 'Minor effort - Normal navigation', examples: 'Crowded areas, basic wayfinding' },
  { level: 3, description: 'Moderate effort - Some challenges', examples: 'Finding elevators, tactile navigation' },
  { level: 4, description: 'Notable effort - Significant barriers', examples: 'Platform gaps, poor audio/visual cues' },
  { level: 5, description: 'High effort - Major accessibility issues', examples: 'Long elevator waits, complex layouts' }
];

const PhysicalEffortMap = () => {
  const [selectedPath, setSelectedPath] = useState('wheelchair');
  const currentPath = stationLayoutReal.paths.find(path => path.type === selectedPath);
  const maxEffort = 5;
  
  const getEffortColor = (effort) => {
    const colors = ['#4ade80', '#fbbf24', '#fb923c', '#ef4444', '#dc2626'];
    return colors[effort - 1] || '#dc2626';
  };

  return (
    <div className="flex flex-col bg-slate-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Physical Effort Map: Penn Station to Jay St–MetroTech</h2>
      <p className="text-gray-600 mb-6">Based on real accessibility features and challenges documented at these stations</p>
      
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Jay St-MetroTech Accessible Station Lab Features (2019-2020)</h3>
        <ul className="list-disc pl-5 text-green-700 grid grid-cols-2 gap-2">
          <li>Blue tactile guidance tiles with raised bars</li>
          <li>Color-coded tape guideways for transfers</li>
          <li>Braille signage at decision points</li>
          <li>NaviLens app for smartphone navigation</li>
          <li>Visual boarding area floor markers</li>
          <li>Alternate route diagrams (15 total)</li>
        </ul>
      </div>
      
      <div className="flex space-x-4 mb-4">
        <button 
          className={`px-4 py-2 rounded-md ${selectedPath === 'standard' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedPath('standard')}
        >
          Standard Traveler
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${selectedPath === 'wheelchair' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedPath('wheelchair')}
        >
          Wheelchair User
        </button>
        <button 
          className={`px-4 py-2 rounded-md ${selectedPath === 'visuallyImpaired' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray