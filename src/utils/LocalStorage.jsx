const employees = [
  {
    id: 1,
    name: "Rahul",
    email: "rahul@example.com",
    password: "123",
    task_numbers: { new: 2, active: 1, completed: 2, failed: 0 },
    tasks: [
      {
        task_title: "Design Login Page",
        task_date: "2026-02-01",
        category: "Development",
        task_description: "Create a clean and responsive login page using modern UI practices with proper validation and accessibility support for multiple devices.",
        failed_task: false,
        new_task: false,
        active_task: true,
        completed_task: false
      },
      {
        task_title: "Fix Navbar Bug",
        task_date: "2026-02-03",
        category: "Development",
        task_description: "Resolve responsive navbar issues affecting layout on smaller devices and ensure proper navigation alignment across all browsers.",
        failed_task: false,
        new_task: false,
        active_task: false,
        completed_task: true
      },
      {
        task_title: "Write Unit Tests",
        task_date: "2026-02-05",
        category: "Testing",
        task_description: "Develop unit tests for main components ensuring stable functionality, proper validation checks, and improved reliability of application features.",
        failed_task: false,
        new_task: true,
        active_task: false,
        completed_task: false
      },
      {
        task_title: "Improve Button Styles",
        task_date: "2026-02-06",
        category: "Design",
        task_description: "Update button components with consistent styling, hover effects, accessibility standards, and responsive design improvements across application pages.",
        failed_task: false,
        new_task: false,
        active_task: false,
        completed_task: true
      },
      {
        task_title: "Dashboard Layout Setup",
        task_date: "2026-02-08",
        category: "Development",
        task_description: "Create initial dashboard layout structure including cards, navigation sections, and proper spacing to maintain clean user interface design.",
        failed_task: false,
        new_task: true,
        active_task: false,
        completed_task: false
      }
    ]
  },

  {
    id: 2,
    name: "Anita",
    email: "anita@example.com",
    password: "123",
    task_numbers: { new: 2, active: 1, completed: 2, failed: 1 },
    tasks: [
      {
        task_title: "Create API Routes",
        task_date: "2026-02-02",
        category: "Development",
        task_description: "Develop RESTful API routes with structured responses, proper authentication handling, and validation to support frontend data operations.",
        failed_task: false,
        new_task: false,
        active_task: true,
        completed_task: false
      },
      {
        task_title: "Database Schema",
        task_date: "2026-02-04",
        category: "Development",
        task_description: "Design optimized database schema with proper relationships, normalization rules, indexing strategies, and scalable architecture structure.",
        failed_task: false,
        new_task: false,
        active_task: false,
        completed_task: true
      },
      {
        task_title: "Optimize Queries",
        task_date: "2026-02-06",
        category: "Optimization",
        task_description: "Improve database performance by refactoring slow queries, adding indexes, and optimizing data retrieval operations for scalability.",
        failed_task: false,
        new_task: true,
        active_task: false,
        completed_task: false
      },
      {
        task_title: "Server Deployment",
        task_date: "2026-02-07",
        category: "Deployment",
        task_description: "Deploy backend to production server with environment setup, secure configuration, logging system, and server monitoring checks.",
        failed_task: true,
        new_task: false,
        active_task: false,
        completed_task: false
      },
      {
        task_title: "API Documentation",
        task_date: "2026-02-09",
        category: "Documentation",
        task_description: "Write detailed API documentation including endpoints, request structure, authentication methods, and example responses for developers.",
        failed_task: false,
        new_task: false,
        active_task: false,
        completed_task: true
      },
      {
        task_title: "Cache Implementation",
        task_date: "2026-02-10",
        category: "Optimization",
        task_description: "Implement caching mechanism using memory storage or Redis to reduce repeated database queries and improve API response speed.",
        failed_task: false,
        new_task: true,
        active_task: false,
        completed_task: false
      }
    ]
  },

  {
    id: 3,
    name: "Vikas",
    email: "vikas@example.com",
    password: "123",
    task_numbers: { new: 1, active: 1, completed: 2, failed: 0 },
    tasks: [
      {
        task_title: "UI Component Setup",
        task_date: "2026-02-01",
        category: "Development",
        task_description: "Create reusable UI components with modular structure, responsive design practices, and proper styling for scalable frontend development.",
        failed_task: false,
        new_task: false,
        active_task: false,
        completed_task: true
      },
      {
        task_title: "Form Validation",
        task_date: "2026-02-03",
        category: "Development",
        task_description: "Implement both client and server side form validation to improve data integrity, prevent incorrect inputs, and enhance user feedback experience.",
        failed_task: false,
        new_task: false,
        active_task: true,
        completed_task: false
      },
      {
        task_title: "Bug Testing",
        task_date: "2026-02-08",
        category: "Testing",
        task_description: "Test application modules to identify bugs, record unexpected behaviors, and provide detailed reports for developers to resolve issues.",
        failed_task: false,
        new_task: true,
        active_task: false,
        completed_task: false
      },
      {
        task_title: "Theme Customization",
        task_date: "2026-02-11",
        category: "Design",
        task_description: "Add light and dark theme support with consistent color variables, smooth switching logic, and accessible design adjustments.",
        failed_task: false,
        new_task: false,
        active_task: false,
        completed_task: true
      }
    ]
  },

  {
    id: 4,
    name: "Neha",
    email: "neha@example.com",
    password: "123",
    task_numbers: { new: 2, active: 1, completed: 1, failed: 1 },
    tasks: [
      {
        task_title: "Landing Page Design",
        task_date: "2026-02-02",
        category: "Design",
        task_description: "Design modern landing page layout with clear call to actions, optimized visuals, responsive structure, and engaging user interface.",
        failed_task: false,
        new_task: false,
        active_task: false,
        completed_task: true
      },
      {
        task_title: "SEO Optimization",
        task_date: "2026-02-05",
        category: "Optimization",
        task_description: "Improve website SEO using structured content, optimized keywords, meta tags, loading speed enhancements, and accessibility improvements.",
        failed_task: true,
        new_task: false,
        active_task: false,
        completed_task: false
      },
      {
        task_title: "Performance Testing",
        task_date: "2026-02-09",
        category: "Testing",
        task_description: "Perform load testing under heavy traffic conditions, analyze bottlenecks, and ensure smooth performance during peak usage times.",
        failed_task: false,
        new_task: false,
        active_task: true,
        completed_task: false
      },
      {
        task_title: "Analytics Setup",
        task_date: "2026-02-10",
        category: "Deployment",
        task_description: "Integrate analytics tools to monitor user behavior, traffic patterns, engagement metrics, and conversion rates for better insights.",
        failed_task: false,
        new_task: true,
        active_task: false,
        completed_task: false
      },
      {
        task_title: "Image Optimization",
        task_date: "2026-02-12",
        category: "Optimization",
        task_description: "Compress images and implement lazy loading to reduce load time, improve performance, and enhance overall website user experience.",
        failed_task: false,
        new_task: true,
        active_task: false,
        completed_task: false
      }
    ]
  },

  {
    id: 5,
    name: "Arjun",
    email: "arjun@example.com",
    password: "123",
    task_numbers: { new: 1, active: 1, completed: 2, failed: 0 },
    tasks: [
      {
        task_title: "Implement Auth",
        task_date: "2026-02-03",
        category: "Security",
        task_description: "Develop secure authentication system with encrypted passwords, token based sessions, and proper validation for protecting user accounts.",
        failed_task: false,
        new_task: false,
        active_task: false,
        completed_task: true
      },
      {
        task_title: "Session Handling",
        task_date: "2026-02-06",
        category: "Security",
        task_description: "Create secure session management with timeout logic, refresh tokens, and protection from unauthorized access attempts.",
        failed_task: false,
        new_task: false,
        active_task: true,
        completed_task: false
      },
      {
        task_title: "Error Logging",
        task_date: "2026-02-08",
        category: "Development",
        task_description: "Implement centralized logging system capturing runtime errors, system failures, and debugging information for faster issue resolution.",
        failed_task: false,
        new_task: true,
        active_task: false,
        completed_task: false
      },
      {
        task_title: "Password Reset Feature",
        task_date: "2026-02-11",
        category: "Security",
        task_description: "Add secure password reset functionality with email verification, token validation, and proper user authentication flows.",
        failed_task: false,
        new_task: false,
        active_task: false,
        completed_task: true
      }
    ]
  }
];




const admin = [{
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
}]


export  const setLocalstorage = ()=>{
  
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees',JSON.stringify(employees))
  }

  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin',JSON.stringify(admin))
  }
}

export const getLocalstorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees')) 
    const admin= JSON.parse(localStorage.getItem('admin')) 

    return{employees,admin}
}