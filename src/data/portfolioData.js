export const PROJECTS = [
  {
    id: 'gk-shopease',
    title: 'GK ShopEase',
    category: 'AWS CloudFront & Generative AI',
    status: 'Live on AWS',
    featured: true,
    description: 'Full-stack AI-driven e-commerce platform with real-time product insights, secure JWT authentication, and high-availability cloud architecture.',
    techStack: ['Java 17', 'Spring Boot', 'React.js', 'MySQL', 'AWS EC2', 'AWS RDS', 'Gemini AI', 'CloudFront'],
    liveUrl: 'https://d1637jx31wm2nm.cloudfront.net',
    githubFrontend: 'https://github.com/gokulkrishna12/E-Commerce-FRONTEND',
    githubBackend: 'https://github.com/gokulkrishna12/E-Commerce-BACKEND',
    architecture: {
      tagline: 'Multi-Tier AWS Cloud Architecture with AI Stream',
      overview: 'High-speed React SPA distributed via AWS CloudFront CDN, routing secure API requests to a Spring Boot backend on EC2, integrated with an isolated AWS RDS MySQL instance and Google Gemini AI.',
      points: [
        'Spring Security 6 with stateless JWT authentication & role-based route guards.',
        'Gemini API integration with custom Jackson ObjectMapper streaming parsers.',
        'AWS CloudFront + S3 static distribution paired with AWS RDS relational database.'
      ]
    }
  },
  {
    id: 'expense-tracker',
    title: 'Smart Expense Tracker',
    category: 'Full-Stack Analytics',
    status: 'Live on Vercel',
    featured: false,
    description: 'Financial analytics dashboard with monthly burn-rate calculators, category visualizers, and transactional aggregation endpoints.',
    techStack: ['React.js', 'Spring Boot', 'Chart.js', 'MySQL', 'Sass', 'REST APIs'],
    liveUrl: 'https://expense-tracker-frontend-vert-omega.vercel.app/',
    githubFrontend: 'https://github.com/gokulkrishna12/Expense-Tracker-Frontend',
    githubBackend: 'https://github.com/gokulkrishna12/Expense-Tracker-Backend',
    architecture: {
      tagline: 'Transactional Integrity & Real-time Charting',
      overview: 'Engineered high-performance REST APIs with dynamic SQL aggregation queries and optimized client-side state transitions.',
      points: [
        'Custom Spring Data JPA queries with index optimization for sub-millisecond lookups.',
        'Interactive Chart.js visualizer dynamically reflecting income vs. expenditure cash flows.',
        'ACID-compliant transactional mutations preventing race conditions.'
      ]
    }
  },
  {
    id: 'employee-mgmt',
    title: 'Enterprise Employee Portal',
    category: 'Enterprise RBAC System',
    status: 'Live on Vercel',
    featured: false,
    description: 'Role-based access control portal managing department hierarchies, payroll records, and secure employee audit logs.',
    techStack: ['Java', 'Spring Data JPA', 'React.js', 'MySQL', 'Bootstrap', 'REST APIs'],
    liveUrl: 'https://employee-management-system-frontend-ruddy-psi.vercel.app/',
    githubFrontend: 'https://github.com/gokulkrishna12/Employee-Management-system-FRONTEND',
    githubBackend: 'https://github.com/gokulkrishna12/Employee-Management-system-BACKEND',
    architecture: {
      tagline: 'Role-Based Access Control (RBAC) System',
      overview: 'Enterprise system enforcing method-level security annotations with decoupled React frontend and RESTful JPA backend.',
      points: [
        'Granular RBAC with Admin, Manager, and Employee permissions.',
        'Optimized MySQL schema design with relational mapping and indexing.',
        'Decoupled REST API contract with CORS-secured endpoints.'
      ]
    }
  }
];