/**
 * Central portfolio data — Samrudhi Shetty's Portfolio Series.
 * Cinematic, streaming-inspired portfolio with all projects, achievements, and education.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Samruddhi Shetty',
  displayName: 'Samrudhi Shetty',
  firstName: 'SAMRUDHI',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SAMRUDHI ORIGINAL',
  role: 'Aspiring AI & Machine Learning Engineer',
  tagline: ['Aspiring AI & ML Engineer', 'Python & Java', 'IoT & AI Solutions', 'Offline-First Systems'],
  intro:
    'An Aspiring Artificial Intelligence and Machine Learning Engineer (B.E. AIML · CGPA 8.79) passionate about developing intelligent solutions for real-world challenges, with hands-on experience in AI models, IoT systems, offline-first architectures, and national hackathons.',
  location: 'Mangalore / Udupi, Karnataka, India',
  phone: '+91 7975374490',
  email: 'samruddhishetty54@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/samrudhi-shetty-045025379',
    github: 'https://github.com/samruddhishetty54-png',
    portfolio: 'https://samruddhishetty54-png.github.io',
  },
  resumePdf: '/assets/Samrudhi_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Samrudhi Shetty',
  },
  interests: ['Artificial Intelligence', 'Machine Learning', 'Generative AI', 'IoT & Smart Systems', 'Offline-First Architectures', 'Problem Solving'],
};

export const education = [
  {
    school: 'Sahyadri College of Engineering and Management',
    place: 'Adyar, Mangaluru, Karnataka',
    degree: 'Bachelor of Engineering (B.E.) in Artificial Intelligence and Machine Learning',
    period: '2024 – 2028',
    score: 'CGPA 8.79',
  },
  {
    school: 'Mother Teresa PU College',
    place: 'Kundapura, Karnataka',
    degree: 'Pre-University Course (PUC – PCMB)',
    period: '2022 – 2024',
    score: '95%',
  },
  {
    school: 'KPS Bidkalkatte',
    place: 'Bidkalkatte, Karnataka',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    period: '2022',
    score: '91%',
  },
];

export const experience = [
  {
    company: 'Forage',
    role: 'Virtual Work Experience Program',
    place: 'Remote',
    period: '2024',
    points: [
      'Completed the Forage Virtual Work Experience Program, gaining practical industry problem-solving and software development exposure.',
      'Demonstrated strong analytical thinking, adaptability, and teamwork while tackling emerging technology challenges.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'resume-analyzer',
    title: 'Placement Intelligent Resume Analyzer & Management System',
    year: '2025',
    genre: 'AI • ATS Scoring • Full-Stack',
    logline: 'An AI-powered web application and resume management system built to analyze resumes, calculate ATS compatibility scores, match with job descriptions, and provide personalized recommendations.',
    stack: ['Java', 'JDBC', 'MySQL', 'SQL', 'React', 'Tailwind CSS', 'Git & GitHub'],
    build: [
      'Developed an AI-powered web application to parse and analyze resumes against targeted job descriptions.',
      'Engineered algorithms to calculate precise ATS compatibility scores and pinpoint missing skills.',
      'Designed a personalized recommendation engine to help students enhance resume relevance and placement readiness.',
      'Implemented robust relational database persistence and queries using Java, JDBC, and structured MySQL schemas.',
    ],
    features: [
      'Automated resume parsing and structured competency extraction',
      'Quantitative ATS compatibility scoring algorithm aligned with job descriptions',
      'Targeted skill gap analysis highlighting missing keywords and proficiencies',
      'Personalized enhancement recommendations to increase interview callbacks',
      'Robust relational database persistence using Java, JDBC, and MySQL schemas',
    ],
    metrics: [
      { value: 'AI-Powered', label: 'resume evaluation' },
      { value: 'ATS Scoring', label: 'compatibility analysis' },
      { value: 'Skill Matching', label: 'gap identification' },
      { value: 'Java + MySQL', label: 'core architecture' },
    ],
    github: 'https://github.com/samruddhishetty54-png/updated-resume-managment-system',
    palette: { from: '#1a0826', via: '#5c1682', to: '#090510', accent: '#c455ff' },
    motif: 'flow',
  },
  {
    id: 'sehasetu',
    title: 'SehaSetu – Rural Healthcare & Telemedicine Platform',
    year: '2024',
    genre: 'Telemedicine • Offline-First Systems • Low-Bandwidth',
    logline: 'An offline-first, low-bandwidth telemedicine platform designed to dramatically improve healthcare accessibility for citizens in rural and remote regions with intermittent internet connectivity.',
    stack: ['React', 'Node.js', 'Express', 'IndexedDB', 'Auto-Sync Protocols', 'Tailwind CSS'],
    build: [
      'Engineered an offline-first telemedicine architecture empowering local frontline community health workers (ASHAs) to record patient vitals without internet connectivity.',
      'Designed automatic synchronization protocols that seamlessly transfer diagnostic records to city doctors once reliable connectivity is detected.',
      'Optimized data payloads for weak 2G/3G mobile networks, providing low-bandwidth REST and real-time WebSocket communication.',
      'Built clinician monitoring dashboards for reviewing longitudinal diagnostic trends, health histories, and digital prescriptions.',
    ],
    features: [
      'Offline patient record capture for remote, zero-connectivity health camps',
      'Automatic background data synchronization when internet access becomes available',
      'Doctor monitoring dashboard for reviewing diagnostic trends & prescriptions',
      'Low-bandwidth data communication optimized for weak 2G/3G mobile networks',
      'Role-based workflows tailored for frontline healthcare workers and physicians',
    ],
    metrics: [
      { value: 'Offline-First', label: 'zero connectivity capture' },
      { value: 'Auto-Sync', label: 'reliable doctor handoff' },
      { value: 'Low-Bandwidth', label: 'optimized for 2G/3G' },
      { value: 'Telemedicine', label: 'rural health accessibility' },
    ],
    github: 'https://github.com/charishma-rai/sehatsetu',
    palette: { from: '#041829', via: '#0f5279', to: '#040b12', accent: '#38bdf8' },
    motif: 'tenants',
  },
  {
    id: 'tree-protection',
    title: 'Sandalwood Tree Protection System',
    year: '2024',
    genre: 'IoT • Hackathon Prototype • Real-Time Alerting',
    logline: 'An IoT-based anti-poaching prototype developed during the Socio Spark Hackathon for real-time monitoring of sandalwood reserves and rapid detection of illegal tree cutting.',
    stack: ['IoT Sensors', 'NodeMCU / ESP', 'Embedded C', 'GPS Module', 'Hardware Prototype'],
    build: [
      'Developed an IoT-based prototype during the Socio Spark Hackathon for real-time forest monitoring and illegal tree-cutting detection.',
      'Engineered an intelligent alert system to immediately assist forest authorities in preventing illicit sandalwood harvesting.',
      'Utilized sensor-based vibration and movement detection to identify unauthorized logging activities instantaneously.',
      'Integrated GPS tracking for sector surveillance in dense reserve forests under tight 24-hour sprint deadlines.',
    ],
    features: [
      'Real-time illegal tree cutting & vibration detection',
      'Automated immediate alert dispatch to forestry officials',
      'GPS-enabled location tracking for forest sector surveillance',
      'Rapid hardware prototype assembled and verified under hackathon conditions',
    ],
    metrics: [
      { value: 'Real-Time', label: 'monitoring & detection' },
      { value: 'Socio Spark', label: 'hackathon innovation' },
      { value: 'Instant', label: 'alert system for authorities' },
      { value: 'IoT-Based', label: 'anti-poaching prototype' },
    ],
    github: 'https://github.com/samruddhishetty54-png',
    palette: { from: '#021810', via: '#0c5c3e', to: '#050c08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'aquaculture-prediction',
    title: 'AI-Based Precision Aquaculture Toxicity & Yield Prediction',
    year: '2024',
    genre: 'AI & ML • Explainable AI (XAI) • Environmental Systems',
    logline: 'An AI-driven decision-support system for precision aquaculture that optimizes fish yield while proactively forecasting water toxicity (ammonia, pH, temp) using Explainable AI.',
    stack: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'Explainable AI (XAI)', 'Time-Series'],
    build: [
      'Proposed as an academic mini-project in the AIML Department at Sahyadri College of Engineering & Management.',
      'Developed predictive machine learning time-series models to forecast hazardous ammonia spikes before they harm aquatic life.',
      'Paired dynamic feeding recommendations with Explainable AI (XAI) transparent alerts to prevent feed decomposition.',
      'Built predictive analytics dashboards presenting water quality trends, historical patterns, and hazard factor breakdowns.',
    ],
    features: [
      'Predictive toxicity forecasting analyzing multi-parameter time-series sensor data',
      'Adaptive feeding recommendation engine to prevent excess feed decomposition',
      'Explainable AI (XAI) transparent risk alerts detailing exact contributing factors',
      'Historical trend analytics dashboard for safe, sustainable fish farming',
    ],
    metrics: [
      { value: 'Predictive', label: 'ammonia & toxicity forecasting' },
      { value: 'Explainable AI', label: 'transparent risk alerts' },
      { value: 'Optimized', label: 'feed & yield recommendation' },
      { value: 'Sahyadri', label: 'AIML department project' },
    ],
    github: 'https://github.com/samruddhishetty54-png',
    palette: { from: '#1a0d24', via: '#5e1b53', to: '#09050d', accent: '#f472b6' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sih-bhashasetu',
    title: 'Smart India Hackathon (SIH) – Selected for Round 2',
    org: 'National Hackathon',
    detail: 'Selected for Round 2 of the prestigious Smart India Hackathon (SIH) competing nationwide with "Bhasha Setu" — an innovative linguistic inclusivity and multilingual communication bridge.',
    laurel: 'SIH Round 2 Qualified',
    link: '#',
  },
  {
    id: 'socio-spark',
    title: 'Socio Spark Hackathon',
    org: 'Hackathon Innovation',
    detail: 'Developed the IoT-based Sandalwood Tree Protection System for real-time illegal cutting detection and automated alert dispatch.',
    laurel: 'IoT Innovation',
  },
  {
    id: 'witch-hunt',
    title: 'Witch Hunt Hackathon',
    org: 'Competitive Hackathon',
    detail: 'Participated in intense computational challenge rounds solving technical problems under tight hackathon deadlines.',
    laurel: 'Hackathon Participant',
  },
  {
    id: 'navonmesha',
    title: 'Navonmesha Hackathon',
    org: 'Innovation Hackathon',
    detail: 'Collaborated on rapid prototyping and intelligent problem-solving for emerging tech challenges.',
    laurel: 'Hackathon Participant',
  },
  {
    id: 'math-society',
    title: 'Mathematics Excellence Certificate',
    org: 'National Math Society',
    detail: 'Recognized with the Mathematics Excellence Certificate for outstanding quantitative and analytical prowess.',
    laurel: 'National Math Society',
  },
  {
    id: 'forage-program',
    title: 'Forage Work Experience',
    org: 'Virtual Experience Program',
    detail: 'Completed real-world software simulation modules and engineering task workflows.',
    laurel: 'Program Graduate',
  },
  {
    id: 'academic-record',
    title: 'Academic Distinction',
    org: 'Sahyadri & Mother Teresa',
    detail: 'Maintained strong academic standing: B.E. AI & ML (CGPA 8.79), Pre-University (95%), and SSLC (91%).',
    laurel: 'Academic Excellence',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Smart India Hackathon', name: 'SIH Round 2 Qualification — Bhasha Setu', link: '#' },
  { issuer: 'National Math Society', name: 'Mathematics Excellence Certificate', link: '#' },
  { issuer: 'Forage', name: 'Virtual Work Experience Program Certificate', link: '#' },
  { issuer: 'Socio Spark', name: 'Socio Spark Hackathon Participation Certificate', link: '#' },
  { issuer: 'Witch Hunt', name: 'Witch Hunt Hackathon Participation Certificate', link: '#' },
  { issuer: 'Navonmesha', name: 'Navonmesha Hackathon Participation Certificate', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core programming foundations',
    skills: [
      { name: 'Python', mono: 'Py', note: 'AI / ML' },
      { name: 'Java', mono: 'Jv', note: 'Core' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent systems & data manipulation',
    skills: [
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'Scikit-Learn', mono: 'Sk' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Pandas', mono: 'Pd' },
    ],
  },
  {
    id: 'databases',
    title: 'Database & Connectivity',
    subtitle: 'Data management & persistence',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'JDBC', mono: 'Jd' },
    ],
  },
  {
    id: 'webdev',
    title: 'Web & Systems',
    subtitle: 'Full-stack & offline architectures',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML5 & CSS3', mono: 'H5' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'IDEs, platforms & version control',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'IntelliJ IDEA', mono: 'Ij' },
      { name: 'Replit', mono: 'Rp' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    subtitle: 'Professional capabilities',
    skills: [
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Teamwork', mono: 'Tw' },
      { name: 'Communication', mono: 'Cm' },
      { name: 'Leadership', mono: 'Ld' },
      { name: 'Adaptability', mono: 'Ad' },
    ],
  },
  {
    id: 'spoken-languages',
    title: 'Languages',
    subtitle: 'Communication',
    skills: [
      { name: 'English', mono: 'En' },
      { name: 'Kannada', mono: 'Kn' },
      { name: 'Hindi', mono: 'Hi' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in projects, certifications, or education on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['B.E. AI & ML', 'Aquaculture Toxicity Prediction', 'TensorFlow, NumPy & Pandas implementation'],
  Java: ['Placement Intelligent Resume Analyzer', 'JDBC connectivity & enterprise logic'],
  C: ['Programming Languages on Resume', 'Algorithmic problem solving & low-level concepts'],
  SQL: ['Placement Intelligent Resume Analyzer', 'MySQL Database schema engineering'],
  TensorFlow: ['AI/ML stack on Resume', 'Deep learning & neural architectures'],
  'Scikit-Learn': ['AI-Based Precision Aquaculture Project', 'Predictive modeling & regression'],
  NumPy: ['B.E. AI & ML', 'Numerical computing & data matrices in aquaculture models'],
  Pandas: ['Data manipulation, parsing & tabular analytics in ML pipelines'],
  MySQL: ['Placement Intelligent Resume Analyzer backend & schema modeling'],
  JDBC: ['Java Database Connectivity in Resume Analyzer'],
  React: ['SehaSetu Telemedicine Platform', 'Resume Analyzer UI', 'Portfolio Web Apps'],
  JavaScript: ['Interactive frontend logic, asynchronous requests & DOM interactions'],
  'HTML5 & CSS3': ['Semantic markup, accessible design & responsive modern layouts'],
  'Tailwind CSS': ['SehaSetu platform styling & modern utility-first interfaces'],
  'REST APIs': ['SehaSetu backend communication & client-server data synchronization'],
  Git: ['Version control across academic projects & hackathon sprints'],
  GitHub: ['GitHub repository workflows, open source tracking & code releases'],
  'VS Code': ['Primary IDE for Python, React, C & full-stack development'],
  'IntelliJ IDEA': ['Java & JDBC enterprise development environment'],
  Replit: ['Rapid cloud prototyping & collaborative coding'],
  'Problem Solving': ['National Math Society Certificate', 'Competitive hackathons (SIH, Socio Spark)'],
  Teamwork: ['SIH Round 2, Socio Spark, Witch Hunt & Navonmesha Hackathons'],
  Leadership: ['Leading project initiatives, architecture design & prototype delivery'],
  Adaptability: ['Mastering multi-paradigm stacks across AI, web & hardware IoT'],
  English: ['Professional technical communication, presentation & documentation'],
  Kannada: ['Fluent native communication'],
  Hindi: ['Fluent communication'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
const rose: Palette = { from: '#1a0d24', via: '#5e1b53', to: '#09050d', accent: '#f472b6' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2024',
    synopsis: 'Academic excellence through SSLC at KPS Bidkalkatte (91%) and Pre-University at Mother Teresa PU College (95%).',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Schooling & Distinction',
        description: 'Completed SSLC at KPS Bidkalkatte with 91% and Pre-University (PUC) at Mother Teresa PU College with 95%.',
        tags: ['SSLC 91%', 'PUC 95%', 'Academics'],
        runtime: '2022 – 2024',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Analytical Mindset',
        description: 'Earned the Mathematics Excellence Certificate from the National Math Society for quantitative distinction.',
        tags: ['Math Society', 'Analytical Prowess'],
        runtime: 'Award',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2024 – 2028',
    synopsis: 'Bachelor of Engineering in Artificial Intelligence and Machine Learning at Sahyadri College of Engineering and Management.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Sahyadri Chapter',
        description: 'Admitted to Sahyadri College of Engineering and Management for B.E. in AI & ML, achieving a 8.79 CGPA.',
        tags: ['B.E. AI & ML', 'CGPA 8.79', 'Sahyadri'],
        runtime: '2024 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Core Stack',
        description: 'Mastered programming in Python, Java, C, and SQL alongside AI libraries TensorFlow, NumPy, and Pandas.',
        tags: ['Python', 'Java', 'TensorFlow', 'NumPy', 'Pandas'],
        runtime: 'Core Curriculum',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'The Hackathon Arena',
    period: '2024 – 2025',
    synopsis: 'Transforming theoretical knowledge into rapid prototypes through high-stakes hackathons and industry simulation programs.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Smart India Hackathon (SIH)',
        description: 'Selected for Round 2 of the nationwide Smart India Hackathon with Bhasha Setu — a linguistic inclusivity and multilingual communication bridge.',
        tags: ['SIH Round 2', 'National Arena', 'Bhasha Setu'],
        runtime: 'SIH 2024',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Socio Spark & Green Tech',
        description: 'Engineered the Sandalwood Tree Protection System IoT prototype during Socio Spark Hackathon to counter illegal logging.',
        tags: ['Socio Spark', 'IoT', 'Forest Protection'],
        runtime: 'Hackathon',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'Witch Hunt & Navonmesha',
        description: 'Tackled competitive problem sets and innovative prototypes in Witch Hunt Hackathon and Navonmesha Hackathon.',
        tags: ['Witch Hunt', 'Navonmesha', 'Teamwork'],
        runtime: 'Hackathons',
        palette: ocean,
      },
      {
        code: 'S03 E04',
        title: 'The Virtual Simulation',
        description: 'Completed the Forage Virtual Work Experience Program, solving real-world enterprise engineering scenarios.',
        tags: ['Forage', 'Industry Readiness'],
        runtime: 'Work Experience',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Intelligent Originals',
    period: '2024 – 2025',
    synopsis: 'Building functional, intelligent software that solves practical education, healthcare, and environmental problems.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Placement Intelligent Resume Analyzer',
        description: 'Developed an AI-driven web application to evaluate resumes, compute ATS compatibility scores, and surface personalized recommendations.',
        tags: ['Java', 'JDBC', 'MySQL', 'AI Analyzer'],
        runtime: 'Original',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'SehaSetu – Rural Healthcare',
        description: 'Engineered an offline-first telemedicine platform designed to bring healthcare access to low-connectivity remote regions.',
        tags: ['Offline-First', 'Auto-Sync', 'Telemedicine'],
        runtime: 'Original',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Sandalwood Tree Protection System',
        description: 'Engineered an IoT prototype with real-time sensor detection and emergency alerts to assist authorities against tree poachers.',
        tags: ['IoT Sensors', 'Hardware Alert', 'Hackathon'],
        runtime: 'Original',
        palette: jade,
      },
      {
        code: 'S04 E04',
        title: 'Precision Aquaculture Prediction',
        description: 'Developed an AI decision-support system forecasting water toxicity (ammonia, pH) with Explainable AI for sustainable fish yield.',
        tags: ['Machine Learning', 'Time-Series', 'XAI'],
        runtime: 'Original',
        palette: rose,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Deepening expertise in emerging artificial intelligence models, cloud architectures, and scalable intelligent solutions.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Frontier',
        description: 'Continuously learning emerging technologies to engineer intelligent solutions for real-world global challenges.',
        tags: ['AI Innovation', 'Machine Learning', 'Future Scale'],
        runtime: 'In production',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Degree', title: 'B.E. AI & ML', detail: 'Sahyadri College of Engineering • CGPA 8.79', palette: violet },
  { label: 'National Hackathon', title: 'SIH Round 2', detail: 'Selected for Round 2 of Smart India Hackathon with Bhasha Setu', palette: crimson },
  { label: 'AI Original', title: 'Resume Analyzer', detail: 'ATS compatibility scoring & skill-gap recommendations with Java/MySQL', palette: violet },
  { label: 'Telemedicine Original', title: 'SehaSetu', detail: 'Offline-first rural healthcare platform with auto-sync and low-bandwidth UI', palette: ocean },
  { label: 'IoT Innovation', title: 'Tree Protection', detail: 'Real-time illegal tree-cutting alert prototype developed at Socio Spark', palette: jade },
  { label: 'Predictive AI', title: 'Aquaculture XAI', detail: 'Proactive ammonia & water toxicity forecasting with Explainable AI', palette: rose },
  { label: 'National Honor', title: 'Math Excellence', detail: 'Certificate from National Math Society for quantitative aptitude', palette: amber },
  { label: 'Pre-University', title: 'PUC 95%', detail: 'Mother Teresa PU College distinction in PCMB', palette: violet },
  { label: 'Secondary School', title: 'SSLC 91%', detail: 'KPS Bidkalkatte top academic honors', palette: amber },
  { label: 'Experience', title: 'Forage Program', detail: 'Completed Virtual Work Experience Program in software simulation', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.E. · AI & ML',
    lines: ['Sahyadri College of Engineering and Management', '2024 – 2028 · Udupi / Mangaluru, Karnataka'],
    chips: ['CGPA 8.79', 'PUC 95%', 'SSLC 91%'],
  },
  {
    kicker: 'Skills',
    title: 'Intelligent stacks.',
    lines: ['Python, Java, C, SQL', 'TensorFlow, Scikit-Learn, NumPy, Pandas · MySQL, JDBC', 'React, JavaScript, Tailwind CSS, REST APIs', 'Git, GitHub, VS Code, IntelliJ IDEA, Replit'],
    chips: ['Python', 'Java', 'TensorFlow', 'Scikit-Learn', 'NumPy', 'Pandas', 'MySQL', 'React', 'Tailwind'],
  },
  {
    kicker: 'Hackathons',
    title: 'The Competitive Arena',
    lines: [
      'Smart India Hackathon (SIH) · Selected for Round 2 Nationwide',
      'Socio Spark Hackathon · IoT Tree Protection System',
      'Witch Hunt Hackathon · Intense problem-solving sprints',
      'Navonmesha Hackathon · Rapid prototype design',
    ],
  },
  {
    kicker: 'Originals',
    title: 'Four Originals',
    lines: [
      'Placement Intelligent Resume Analyzer — AI-powered ATS scoring & skill gaps',
      'SehaSetu — Offline-first rural telemedicine platform with auto-sync',
      'Sandalwood Tree Protection System — IoT real-time poaching alert prototype',
      'Precision Aquaculture Prediction — Proactive toxicity forecasting with Explainable AI',
    ],
  },
  {
    kicker: 'Achievements',
    title: 'Distinctions',
    lines: [
      'Smart India Hackathon — Round 2 Selection with Bhasha Setu',
      'Mathematics Excellence Certificate — National Math Society',
      'Forage Virtual Work Experience Program Graduate',
      'Academic Distinction across B.E., PUC (95%), and SSLC (91%)',
    ],
  },
  {
    kicker: 'Mission',
    title: 'Now exploring',
    lines: ['Developing intelligent solutions for real-world challenges with emerging AI and ML technologies.'],
  },
];

export type ProfileId = 'samrudhi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'samrudhi',
    name: 'Samrudhi',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, education & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & code first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & hackathons first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024–2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
