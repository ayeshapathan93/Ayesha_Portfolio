
export const projects = [
  {
    id: 'docboat',
    number: '01',
    name: 'DocBoat',
    subtitle: 'DocBot + ClauseSense',
    category: 'HealthTech',
    summary:
      'An AI-oriented product for medical insights and insurance clarity, presented publicly as DocBot + ClauseSense.',
    description:
      'DocBoat is a full-stack web application for analyzing medical reports and insurance policies and presenting intelligent insights to the person using it. The landing page introduces DocBot + ClauseSense as AI automation for medical insights and insurance clarity, with paths for instant answers, services, pricing, and login. The interface is built with React.js. The API layer uses Node.js and Express.js to process structured and unstructured data. I built it with a team during a HealthTech hackathon in Mumbai.',
    features: [
      'Medical report and insurance policy analysis.',
      'Insights and recommendations for end users.',
      'Responsive React.js interface, including instant answers, services, pricing, and login.',
      'Node.js and Express.js backend for data processing.',
      'REST APIs for structured and unstructured data.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'REST APIs'],
    image: '/images/projects/docboat.png',
    imageAlt:
      'DocBoat landing page for DocBot + ClauseSense, with the headline DocBot + ClauseSense and a call to action for instant answers.',
    hasImage: true,
    github: 'https://github.com/ayeshapathan93/DocBoat-clausesence',
    live: 'https://docbotlcausesense.vercel.app/',
  },
  {
    id: 'erpsaa',
    number: '02',
    name: 'ERPSAA',
    subtitle: 'Campus ERP Platform',
    category: 'Education',
    summary:
      'Developed a modern campus ERP platform to streamline institutional operations and eliminate data silos.',
    description:
      'Developed a modern campus ERP platform to streamline institutional operations and eliminate data silos. The product brings admissions, curriculum, and campus management into one synchronized system, with a public landing experience and a login portal.',
    features: [
      'Academics and admissions management.',
      'Centralized student lifecycle.',
      'Enrollment and curriculum tracking.',
      'Administrative workflow synchronization.',
      'Role-based authentication.',
      'Modern dashboards and access portals.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: '/images/projects/erpsaa.png',
    imageAlt:
      'ERPSAA landing page with the headline Unify your campus. Empower everyone. and buttons for Access Platform and Explore Interface.',
    hasImage: true,
    github: 'https://github.com/ayeshapathan93/ERPSAA',
    live: 'https://erpsa-six.vercel.app/',
  },
  {
    id: 'skyla',
    number: '03',
    name: 'SKYLA',
    subtitle: 'Billing & Inventory Management SaaS',
    category: 'Business SaaS',
    summary:
      'A business management platform designed to simplify billing, inventory tracking, and everyday business operations.',
    description:
      'A business management platform designed to simplify billing, inventory tracking, and everyday business operations. SKYLA brings products, customers, invoices, and transactions into one working system for day-to-day business use.',
    features: [
      'Product management.',
      'Inventory management.',
      'Billing and invoice management.',
      'Customer management.',
      'Business dashboard.',
      'Transaction management.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: '/images/projects/skyala.png',
    imageAlt: 'SKYLA billing and inventory management product screenshot',
    hasImage: true,
   
    github: 'https://github.com/ayeshapathan93/skyala',
    live: 'https://skyala-du1k.vercel.app/login',
  },
  {
    id: 'splitwise',
    number: '04',
    name: 'Splitwise',
    subtitle: 'Expense Sharing App',
    category: 'Finance',
    summary:
      'An expense-sharing app that works like Splitwise, helping friends and groups track shared expenses and split bills.',
    description:
      'A group expense-sharing app for recording shared expenses, splitting bills, and keeping track of who owes whom.',
    features: [
      'Record shared group expenses.',
      'Split bills between group members.',
      'Track balances and who owes whom.',
    ],
    stack: ['React.js', 'Supabase'],
    image: '/images/projects/splitwise.png',
    imageAlt: 'Splitwise project screenshot',
    hasImage: true,
    github: 'https://github.com/ayeshapathan93/splitwise',
    live: '',
  },
  {
    id: 'nexus-ai',
    number: '05',
    name: 'Nexxus-AI',
    subtitle: 'Fake Job Detection System',
    category: 'Machine Learning',
    summary:
      'An intelligent application designed to analyze job postings and identify potentially fraudulent or suspicious job opportunities using machine learning and natural language processing.',
    description:
      'An intelligent application designed to analyze job postings and identify potentially fraudulent or suspicious job opportunities using machine learning and natural language processing. Python handles the detection workflow. Pandas supports the text and data processing. Flask serves the backend, and React.js with Tailwind CSS presents the results.',
    features: [
      'Job posting analysis.',
      'Fake job detection.',
      'Suspicious job identification.',
      'Text processing and analysis.',
      'Prediction results and a user-friendly interface.',
    ],
    workflow: [
      'A job posting is submitted for review.',
      'The text is processed and analyzed.',
      'The Python backend evaluates whether the posting looks fraudulent or suspicious.',
      'The result is shown in the React interface.',
    ],
    stack: ['Python', 'Flask', 'Pandas', 'React.js', 'Tailwind CSS'],
    image: '/images/projects/nexus-ai.png',
    imageAlt: 'Nexus-AI fake job detection product screenshot',
    hasImage: true,
    github: 'https://github.com/ayeshapathan93/Nexus-ai',
    live: '',
  },
]
