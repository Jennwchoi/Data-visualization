import React from 'react';
import './index.css';
import JourneyTimeComparison from './components/JourneyTimeComparison';
import PhysicalEffortMap from './components/PhysicalEffortMap';
import ReliabilityContrast from './components/ReliabilityContrast';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Same Destination, Different Journeys
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              A Data Story of Accessibility at Jay St–MetroTech
            </p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                This project explores how accessibility infrastructure at NYC subway stations 
                affects different users' experiences. Through data visualization, we reveal 
                the stark disparities in travel times, physical effort, and reliability 
                for standard travelers versus wheelchair users and visually impaired passengers.
              </p>
              <p className="text-gray-700">
                Using real data from Penn Station to Jay St–MetroTech, including the innovative 
                Accessible Station Lab pilot program, we document how simple journeys can 
                become complex challenges for passengers with disabilities.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <JourneyTimeComparison />
          </section>

          <section className="mb-12">
            <PhysicalEffortMap />
          </section>

          <section className="mb-12">
            <ReliabilityContrast />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Wheelchair users face 14+ minute delays on identical routes</li>
                <li>Single elevator failures can make journeys impossible for wheelchair users</li>
                <li>Jay St-MetroTech's Station Lab features show promise for system-wide improvements</li>
                <li>Visually impaired travelers navigate 19+ minutes longer than standard travelers</li>
                <li>Real-time elevator reliability remains a critical bottleneck for accessibility</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Sources</h3>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>MTA Elevator & Escalator Status API</li>
                    <li>NYC Council Accessibility Data</li>
                    <li>Jay St-MetroTech Accessible Station Lab Documentation</li>
                    <li>Field observations and user interviews</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Visualization Tools</h3>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>React and Recharts for interactive dashboards</li>
                    <li>Figma for persona journey mapping</li>
                    <li>QGIS for accessibility route analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Research Methods</h3>
                  <ul className="list-disc pl-4 text-gray-700">
                    <li>Comparative persona analysis</li>
                    <li>Dependency mapping for infrastructure</li>
                    <li>Historical reliability tracking</li>
                    <li>Journey time measurement studies</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                Created as part of a comprehensive study on transit accessibility inequities 
                in New York City. This project demonstrates how data visualization can 
                powerfully communicate accessibility challenges that often remain invisible 
                to standard travelers.
              </p>
              <p className="text-gray-700">
                For more information about this project or to collaborate on accessibility research, 
                please connect via LinkedIn or email.
              </p>
            </div>
          </section>
        </main>

        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2025 Accessibility Transit Analysis Project. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;