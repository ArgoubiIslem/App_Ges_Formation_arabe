import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Formateur from '../components/Formateur';
import Formation from '../components/Formation';
import Participant from '../components/Participant';
import Cycle from '../components/Cycle';
import { useState } from 'react';
export default function DashboardLayout() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showCycle, setShowCycle] = useState(false);
  const [showPart, setShowPart] = useState(false);
  const [showFormat, setShowFormat] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="font-roboto flex h-screen bg-gray-200">
      <Sidebar
        dash={setShowDashboard}
        cycle={setShowCycle}
        part={setShowPart}
        format={setShowFormat}
        form={setShowForm}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-200">
          {showDashboard ? <Dashboard /> : null}
          {showCycle ? <Cycle /> : null}
          {showForm ? <Formateur /> : null}
          {showFormat ? <Formation /> : null}
          {showPart ? <Participant /> : null}
        </main>
      </div>
    </div>
  );
}
