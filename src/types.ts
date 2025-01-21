export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Intervention {
  id: number;
  title: string;
  description: string;
  focusArea: string;
  steps: string[];
  monitoringSchedule: string;
  examples: string[];
}

export interface SnapshotQuestion {
  id: number;
  question: string;
  category: string;
  examples: string[];
  reflectionPrompts: string[];
}

export interface ChecklistItem {
  id: number;
  title: string;
  description: string;
  implemented: boolean;
  notes: string;
}