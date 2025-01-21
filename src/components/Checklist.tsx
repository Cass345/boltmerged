import React, { useState } from 'react';
import { CheckSquare } from 'lucide-react';
import { checklistItems } from '../data/mtssData';
import { ChecklistItem } from '../types';

export default function Checklist() {
  const [items, setItems] = useState(checklistItems);

  const toggleImplemented = (id: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, implemented: !item.implemented } : item
      )
    );
  };

  const updateNotes = (id: number, notes: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, notes } : item
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <CheckSquare className="w-8 h-8 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Tier 1 Intervention Checklist</h2>
      </div>

      <div className="space-y-4">
        {items.map((item: ChecklistItem) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <input
                  type="checkbox"
                  checked={item.implemented}
                  onChange={() => toggleImplemented(item.id)}
                  className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Notes:
                  </label>
                  <textarea
                    value={item.notes}
                    onChange={(e) => updateNotes(item.id, e.target.value)}
                    className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Add notes about implementation..."
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-purple-50 rounded-lg p-4">
        <p className="text-purple-800">
          {items.filter(item => item.implemented).length} of {items.length} interventions implemented
        </p>
      </div>
    </div>
  );
}