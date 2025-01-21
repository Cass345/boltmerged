import { QuizQuestion, Intervention, SnapshotQuestion, ChecklistItem } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary goal of MTSS Tier 1 supports?",
    options: [
      "To provide intensive individual interventions",
      "To deliver high-quality core instruction for all students",
      "To work with small groups only",
      "To focus on special education students"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "What percentage of students should respond positively to Tier 1 instruction?",
    options: [
      "25-50%",
      "50-75%",
      "80-85%",
      "95-100%"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Which is NOT a key component of effective Tier 1 instruction?",
    options: [
      "Universal screening",
      "Research-based core curriculum",
      "Individual therapy sessions",
      "Progress monitoring"
    ],
    correctAnswer: 2
  }
];

export const interventions: Intervention[] = [
  {
    id: 1,
    title: "Active Student Response Strategies",
    description: "Increase student engagement through structured response methods",
    focusArea: "Student Engagement",
    steps: [
      "Implement think-pair-share routines",
      "Use response cards or mini-whiteboards",
      "Incorporate choral responses",
      "Use hand signals for quick checks",
      "Implement turn and talk opportunities"
    ],
    monitoringSchedule: "Daily student engagement tracking for 3 weeks",
    examples: [
      "Students use thumbs up/down for understanding",
      "Partners discuss and share responses",
      "Class-wide response to review questions"
    ]
  },
  {
    id: 2,
    title: "Clear Learning Objectives",
    description: "Explicitly state and review learning goals",
    focusArea: "Instructional Clarity",
    steps: [
      "Post daily learning objectives",
      "Review objectives at start of lesson",
      "Reference objectives during instruction",
      "Check understanding of objectives",
      "Revisit objectives at lesson closure"
    ],
    monitoringSchedule: "Weekly objective achievement tracking",
    examples: [
      "Today we will learn to...",
      "I can statements posted",
      "Exit tickets aligned to objectives"
    ]
  }
];

export const snapshotQuestions: SnapshotQuestion[] = [
  {
    id: 1,
    category: "Classroom Environment",
    question: "How is your classroom arranged to support all learners?",
    examples: [
      "Clear traffic patterns",
      "Accessible materials",
      "Visual supports posted",
      "Flexible seating options"
    ],
    reflectionPrompts: [
      "What areas of your room promote independence?",
      "How do students access needed materials?",
      "Where might students face barriers?"
    ]
  },
  {
    id: 2,
    category: "Instructional Practices",
    question: "What methods do you use to check for understanding?",
    examples: [
      "Exit tickets",
      "Think-pair-share",
      "Thumbs up/down",
      "Quick writes"
    ],
    reflectionPrompts: [
      "How often do you assess understanding?",
      "What do you do when students don't understand?",
      "How do you track this data?"
    ]
  }
];

export const checklistItems: ChecklistItem[] = [
  {
    id: 1,
    title: "Clear Behavioral Expectations",
    description: "Post and explicitly teach classroom expectations",
    implemented: false,
    notes: ""
  },
  {
    id: 2,
    title: "Consistent Daily Routines",
    description: "Establish and maintain predictable classroom procedures",
    implemented: false,
    notes: ""
  },
  {
    id: 3,
    title: "Active Supervision",
    description: "Move throughout the room and monitor student engagement",
    implemented: false,
    notes: ""
  }
];