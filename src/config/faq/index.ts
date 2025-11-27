export interface Question {
  question: string;
  answer: string;
  answerStyle: string;
  questionStyle: string;
  fontSizeScaling?: string;
}

export const questions: Question[] = [
   {  question: 'What are the dates for HackNXT 1.0?', 
     answer:  'HackNXT 1.0 will be held on 16th Jan to 18th Jan 2025. We will be waiting for you with a warm welcome.\n',  answerStyle: 'h-35', 
     questionStyle: 'mb-25 -bottom-25', 
     fontSizeScaling: 'text-[clamp(.85rem,2vw,1rem)]', 
    },
  {
  question: 'What could be the size of the team?',
  answer:
    'Teams of 2 to 4 members are allowed. No solo entries. Build a proper team before registering.',
  answerStyle: 'h-32',
  questionStyle: 'mb-24 -bottom-24',
  fontSizeScaling: 'text-[clamp(0.8rem,3vw,1rem)]',
},
{
  question: 'What is the participation fee?',
  answer:
    'The participation fee is ₹599 per team. This covers access to the full 36-hour hackathon, workshops, sessions, and all event facilities.',
  answerStyle: 'h-32',
  questionStyle: 'mb-24 -bottom-24',
  fontSizeScaling: 'text-[clamp(0.75rem,3vw,1rem)]',
},

{
  question: 'Will my travel expenses be reimbursed?',
  answer:
    'No. Travel or accommodation reimbursement is not provided.',
  answerStyle: 'h-28',
  questionStyle: 'mb-20 -bottom-20',
  fontSizeScaling: 'text-[clamp(0.78rem,2vw,1rem)]',
},
{
  question: 'Who can participate?',
  answer:
    'Any student from any college (Engineering, BCA, BCS, Diploma) can apply.',
  answerStyle: 'h-52',
  questionStyle: 'mb-40 -bottom-40',
  fontSizeScaling: 'text-[clamp(0.75rem,3vw,1rem)]',
},
{
  question: 'Can I participate online?',
  answer:
    'No. HackNXT 1.0 is an entirely offline hackathon hosted at SGGS Nanded.',
  answerStyle: 'h-28',
  questionStyle: 'mb-20 -bottom-20',
  fontSizeScaling: 'text-[clamp(0.8rem,3vw,1rem)]',
},
{
  question: 'What should I bring to the hackathon?',
  answer:
    'Laptop, chargers, extension board, and any hardware you need. Bring your college ID + government ID. Entry without ID is not allowed.',
  answerStyle: 'h-60',
  questionStyle: 'mb-50 -bottom-50',
  fontSizeScaling: 'text-[clamp(0.72rem,3.4vw,.9rem)]',
},
{
  question: 'Will food be provided?',
  answer:
    'Yes. Food is available through the campus mess at a fee of ₹400 per participant. This covers 4 full meals, 3 snack/nasta sessions, plus water and tea/coffee. If you prefer, you’re free to arrange your own food from outside.',
  answerStyle: 'h-44',
  questionStyle: 'mb-32 -bottom-32',
  fontSizeScaling: 'text-[clamp(0.85rem,3vw,1rem)]',
},


];
