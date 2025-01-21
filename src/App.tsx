import React from 'react';
import { useState } from 'react';
import { BookOpen, ClipboardList, CheckSquare, FileText } from 'lucide-react';
import Guidebook from './components/Guidebook';
import Snapshot from './components/Snapshot';
import Checklist from './components/Checklist';
import InterventionPlan from './components/InterventionPlan';

function App() {
  const [activeTab, setActiveTab] = useState('guidebook');

  const tabs = [
    { id: 'guidebook', label: 'MTSS Guidebook', icon: BookOpen },
    { id: 'snapshot', label: 'Classroom Snapshot', icon: ClipboardList },
    { id: 'checklist', label: 'Tier 1 Checklist', icon: CheckSquare },
    { id: 'plan', label: 'Intervention Plan', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 py-6">
            MTSS Teacher Support Hub
          </h1>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`
                  flex items-center gap-2 px-3 py-4 text-sm font-medium border-b-2 
                  ${
                    activeTab === id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="py-6">
        {activeTab === 'guidebook' && <Guidebook />}
        {activeTab === 'snapshot' && <Snapshot />}
        {activeTab === 'checklist' && <Checklist />}
        {activeTab === 'plan' && <InterventionPlan />}
      </main>
    </div>
  );

}
export default App;
