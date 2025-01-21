import { useState } from 'react';
import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { TeacherInfo } from './components/TeacherInfo';
import { StudentBackground } from './components/StudentBackground';
import { ReferralReason } from './components/ReferralReason';
import { BehaviorIdentification } from './components/BehaviorIdentification';
import { BehaviorEvaluation } from './components/BehaviorEvaluation';
import { GoalSetting } from './components/GoalSetting';
import { DataCollection } from './components/DataCollection';
import { 
  mockTeacherInfo,
  mockStudentBackground,
  mockReferralReason,
  mockBehaviors,
  mockGoals,
  mockDataCollection 
} from './mockData';

type Section = 'intro' | 'teacherInfo' | 'studentBackground' | 'referralReason' | 'behaviorId' | 'behaviorEval' | 'goals' | 'data' | 'review';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>('intro');
  const [formData, setFormData] = useState({
    teacherInfo: mockTeacherInfo,
    studentBackground: mockStudentBackground,
    referralReason: mockReferralReason,
    behaviors: [],
    goals: [],
    dataCollection: {}
  });

  const updateFormData = (section: keyof typeof formData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const navigateToSection = (section: Section) => {
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">MTSS Referral Process</h1>
          <p className="text-gray-600">Supporting student success through structured intervention</p>
        </header>

        {currentSection === 'intro' && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to the MTSS Referral Process</h2>
            <p className="text-gray-600 mb-6">
              This form will guide you through the process of referring a student to the MTSS program. 
              You'll identify specific areas of concern, understand behavior patterns, set measurable goals, 
              and establish effective data collection methods.
            </p>
            <button
              onClick={() => navigateToSection('teacherInfo')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center w-full sm:w-auto"
            >
              Begin Referral Process
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}

        {currentSection === 'teacherInfo' && (
          <TeacherInfo
            onSubmit={(data) => {
              updateFormData('teacherInfo', data);
              navigateToSection('studentBackground');
            }}
            initialData={formData.teacherInfo}
          />
        )}

        {currentSection === 'studentBackground' && (
          <StudentBackground
            onSubmit={(data) => {
              updateFormData('studentBackground', data);
              navigateToSection('referralReason');
            }}
            onBack={() => navigateToSection('teacherInfo')}
            initialData={formData.studentBackground}
          />
        )}

        {currentSection === 'referralReason' && (
          <ReferralReason
            onSubmit={(data) => {
              updateFormData('referralReason', data);
              navigateToSection('behaviorId');
            }}
            onBack={() => navigateToSection('studentBackground')}
            initialData={formData.referralReason}
          />
        )}

        {currentSection === 'behaviorId' && (
          <BehaviorIdentification
            onSubmit={(data) => {
              updateFormData('behaviors', data);
              navigateToSection('behaviorEval');
            }}
            onBack={() => navigateToSection('referralReason')}
            initialData={formData.behaviors}
          />
        )}

        {currentSection === 'behaviorEval' && (
          <BehaviorEvaluation
            behaviors={formData.behaviors}
            onSubmit={(data) => {
              updateFormData('behaviors', data);
              navigateToSection('goals');
            }}
            onBack={() => navigateToSection('behaviorId')}
          />
        )}

        {currentSection === 'goals' && (
          <GoalSetting
            behaviors={formData.behaviors}
            onSubmit={(data) => {
              updateFormData('goals', data);
              navigateToSection('data');
            }}
            onBack={() => navigateToSection('behaviorEval')}
            initialData={mockGoals} // Use mock data for testing
          />
        )}

        {currentSection === 'data' && (
          <DataCollection
            behaviors={formData.behaviors}
            onSubmit={(data) => {
              updateFormData('dataCollection', data);
              navigateToSection('review');
            }}
            onBack={() => navigateToSection('goals')}
            initialData={mockDataCollection} // Use mock data for testing
          />
        )}

        {currentSection === 'review' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Review and Submit</h2>
            {/* Add review summary here */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => navigateToSection('data')}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                Back
              </button>
              <button
                onClick={() => {
                  // Handle form submission
                  console.log('Form submitted:', formData);
                }}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit Referral
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;