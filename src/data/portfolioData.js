export const PROJECTS = [
  // --- JAVA / AWS PROJECTS ---
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
    pdfDocs: '/docs/gk-shopease-architecture.pdf', // PDF Documentation
    architecture: {
      tagline: 'Multi-Tier AWS Cloud Architecture with AI Stream',
      overview: 'High-speed React SPA distributed via AWS CloudFront CDN, routing secure API requests to a Spring Boot backend on EC2, integrated with an isolated AWS RDS MySQL instance and Google Gemini AI[cite: 10].',
      points: [
        'Spring Security 6 with stateless JWT authentication & role-based route guards[cite: 10].',
        'Gemini API integration with custom Jackson ObjectMapper streaming parsers[cite: 10].',
        'AWS CloudFront + S3 static distribution paired with AWS RDS relational database[cite: 10].'
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
  },

  // --- MERN STACK & MOBILE PROJECTS ---
  {
    id: 'gks-fitness-mobile',
    title: "GK's Fitness Shop (Mobile App)",
    category: 'React Native & AWS',
    status: 'Live APK Available',
    featured: true,
    description: 'Premium full-stack mobile e-commerce application for Android built with React Native and Expo, featuring real-time state management and secure AWS backend[cite: 7].',
    techStack: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB', 'AWS EC2', 'Razorpay', 'EAS'],
    liveUrl: 'https://expo.dev/artifacts/eas/agKKEmsBMTRxwjEH8VtWbEzEzWJm-DLgMn3h6KTPtwA.apk',
    githubFrontend: 'https://github.com/gokulkrishna12/GK-s-Fitness-shop-APP',
    githubBackend: 'https://github.com/gokulkrishna12/GK-s-Fitness-shop-APP',
    pdfDocs: '/docs/gks-fitness-shop-docs.pdf', // PDF Documentation
    architecture: {
      tagline: 'Mobile-First E-Commerce with EAS OTA Updates',
      overview: 'Android e-commerce application built with React Native and Expo Router, connected to a scalable Node.js/Express/MongoDB backend on AWS EC2 with Razorpay payments and EAS CI/CD[cite: 7].',
      points: [
        'Razorpay payment gateway integration with cryptographic signature verification[cite: 7].',
        'React Context API and AsyncStorage for robust local cart and wishlist syncing[cite: 7].',
        'Expo Application Services (EAS Build & Update) for instant OTA JavaScript bug fixes[cite: 7].'
      ]
    }
  },
  {
    id: 'gks-fitness-shop',
    title: "GK's Fitness Shop (Web)",
    category: 'E-Commerce Platform',
    status: 'Live on AWS CloudFront',
    featured: false,
    description: 'Responsive, mobile-first e-commerce web platform tailored for fitness enthusiasts with secure checkout and real-time inventory management[cite: 9].',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS EC2', 'AWS CloudFront', 'Razorpay'],
    liveUrl: 'https://d3tcsjoldbupsr.cloudfront.net/',
    githubFrontend: 'https://github.com/gokulkrishna12/Gk-s-Fitness-shop-FRONTEND',
    githubBackend: 'https://github.com/gokulkrishna12/Gk-s-Fitness-shop-BACKEND',
    pdfDocs: '/docs/gks-fitness-shop-docs.pdf',
    architecture: {
      tagline: 'AWS Hosted MERN E-Commerce with Payment Gateway',
      overview: 'Architected a scalable deployment pipeline by hosting the Node.js/Express backend on AWS EC2 with an Nginx reverse proxy, and globally distributing the frontend via AWS CloudFront[cite: 9].',
      points: [
        'Integrated Razorpay API with cryptographic signature verification for secure checkout[cite: 9].',
        'Engineered secure, real-time inventory management logic in MongoDB Atlas[cite: 9].',
        'Custom OTP-based user authentication flow ensuring data security[cite: 9].'
      ]
    }
  },
  {
    id: 'fit-track-pro',
    title: 'Fit-Track Pro Gym',
    category: 'Full Stack Workout Tracker',
    status: 'Live on Vercel/Render',
    featured: false,
    description: 'Dynamic workout tracking application featuring an interactive React dashboard for athletes to log daily routines and monitor progress.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'SCSS'],
    liveUrl: 'https://fit-track-frontend-delta.vercel.app/',
    githubFrontend: 'https://github.com/gokulkrishna12/Fit-Track-FRONTEND',
    githubBackend: 'https://github.com/gokulkrishna12/Fit-Track-BACKEND',
    architecture: {
      tagline: 'Secure RESTful API with Glassmorphism UI',
      overview: 'Developed robust RESTful CRUD APIs to manage exercise data and implemented stateless JWT-based authorization to secure user sessions.',
      points: [
        'Designed a fully responsive, mobile-first UI utilizing custom SCSS and glassmorphism principles.',
        'Stateless JWT-based authorization securing sensitive backend endpoints.',
        'Seamless cross-device compatibility with optimized React state management.'
      ]
    }
  }
];