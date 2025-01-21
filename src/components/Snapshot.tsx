import React, { useState } from 'react';
import { ClipboardList } from 'lucide-react';
import { snapshotQuestions } from '../data/mtssData';

export default function Snapshot() {
  const [responses, setResponses] = useState<Record<number, string>>({});

  const handleResponseChange = (id: number, value: string) => {
    setResponses(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-3 mb-6">
        <ClipboardList className="w-8 h-8 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Classroom Snapshot</h2>
      </div>

      <div className="space-y-6">
        {snapshotQuestions.map(question => (
          <div key={question.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {question.category}
            </h3>
            <p className="text-gray-700 mb-4">{question.question}</p>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Examples:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                {question.examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-600 mb-2">Reflection:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                {question.reflectionPrompts.map((prompt, index) => (
                  <li key={index}>{prompt}</li>
                ))}
              </ul>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Response:
              </label>
              <textarea
                value={responses[question.id] || ''}
                onChange={(e) => handleResponseChange(question.id, e.target.value)}
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your reflection here..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}