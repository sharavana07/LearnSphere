'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { BookOpen, Clock, Users, Star, Play, FileText, ExternalLink } from 'lucide-react';

// Mock data - replace with your actual courses data
const courses = [
  {
    id: '1',
    title: 'Advanced React Development',
    description: 'Master advanced React concepts and build production-ready applications',
    overview:
      "This comprehensive course covers advanced React patterns, performance optimization, state management, and modern development practices. You'll learn to build scalable applications using the latest React features and best practices.",
    instructor: 'Sarah Johnson',
    rating: 4.8,
    students: 1240,
    duration: '12 hours',
    level: 'Advanced',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    lessons: [
      'Advanced React Hooks and Custom Hooks',
      'Context API and State Management',
      'Performance Optimization Techniques',
      'Server-Side Rendering with Next.js',
      'Testing React Applications',
      'Deployment and CI/CD Pipeline',
    ],
    resources: [
      { name: 'React Documentation', link: 'https://react.dev' },
      {
        name: 'Course GitHub Repository',
        link: 'https://github.com/example/react-course',
      },
      {
        name: 'Supplementary Reading Materials',
        link: 'https://example.com/reading',
      },
      {
        name: 'Community Discord Server',
        link: 'https://discord.gg/example',
      },
    ],
  },
  {
    id: '2',
    title: 'React for Beginners',
    description:
      'Learn the fundamentals of React and start building interactive user interfaces.',
    overview:
      "This beginner-friendly course introduces you to React's core concepts, including components, props, state, and event handling. You will build your first React application step-by-step and gain confidence in creating dynamic web apps.",
    instructor: 'Michael Brown',
    rating: 4.6,
    students: 2100,
    duration: '8 hours',
    level: 'Beginner',
    category: 'Web Development',
    image:
      'https://images.unsplash.com/photo-1581276879432-15a19d654956?w=800&h=400&fit=crop',
    lessons: [
      'Introduction to React',
      'Creating Components',
      'Props and State Basics',
      'Handling Events',
      'Conditional Rendering',
      'Project: Simple To-Do App',
    ],
    resources: [
      { name: 'React Official Docs', link: 'https://react.dev' },
      {
        name: 'Beginner React GitHub Repo',
        link: 'https://github.com/example/react-beginner',
      },
      { name: 'JavaScript Basics Guide', link: 'https://example.com/js-basics' },
    ],
  },
  {
    id: '3',
    title: 'Tailwind CSS Mastery',
    description:
      'Master utility-first CSS with Tailwind and build modern, responsive designs.',
    overview:
      'This course will teach you everything from Tailwind basics to advanced responsive design, animations, and component styling. Learn to create professional-looking websites with minimal custom CSS.',
    instructor: 'Emma Wilson',
    rating: 4.9,
    students: 1560,
    duration: '6 hours',
    level: 'Intermediate',
    category: 'UI/UX Design',
    image:
      'https://images.unsplash.com/photo-1504691342899-9d7eea6fcf38?w=800&h=400&fit=crop',
    lessons: [
      'Getting Started with Tailwind',
      'Responsive Design Principles',
      'Flexbox and Grid Layouts',
      'Customizing Themes',
      'Animations and Transitions',
      'Building a Landing Page',
    ],
    resources: [
      { name: 'Tailwind Documentation', link: 'https://tailwindcss.com/docs' },
      {
        name: 'Tailwind UI Kit',
        link: 'https://tailwindui.com/',
      },
      {
        name: 'Component Examples',
        link: 'https://tailwindcomponents.com/',
      },
    ],
  },
  {
    id: '4',
    title: 'Node.js Backend Development',
    description:
      'Learn to build scalable backend applications with Node.js and Express.',
    overview:
      'This course covers the essentials of backend development using Node.js. You will learn how to set up servers, create REST APIs, manage databases, and implement authentication.',
    instructor: 'David Martinez',
    rating: 4.7,
    students: 1800,
    duration: '10 hours',
    level: 'Intermediate',
    category: 'Backend Development',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=400&fit=crop',
    lessons: [
      'Introduction to Node.js',
      'Setting Up Express Server',
      'Routing and Middleware',
      'Working with Databases',
      'User Authentication',
      'Deploying Node.js Apps',
    ],
    resources: [
      { name: 'Node.js Docs', link: 'https://nodejs.org/en/docs/' },
      { name: 'Express Docs', link: 'https://expressjs.com/' },
      {
        name: 'Backend Project Repository',
        link: 'https://github.com/example/node-backend',
      },
    ],
  },
  {
    id: '5',
    title: 'Python for Data Science',
    description:
      'Learn Python programming and its powerful libraries for data analysis and visualization.',
    overview:
      'This course will take you from Python basics to data analysis and visualization using libraries like Pandas, NumPy, and Matplotlib. You will work on real datasets to develop your skills.',
    instructor: 'Sophia Lee',
    rating: 4.8,
    students: 2300,
    duration: '14 hours',
    level: 'Beginner to Intermediate',
    category: 'Data Science',
    image:
      'https://images.unsplash.com/photo-1581090700227-4c4f50b0ec5a?w=800&h=400&fit=crop',
    lessons: [
      'Python Basics',
      'Working with Data in Pandas',
      'Numerical Computing with NumPy',
      'Data Visualization with Matplotlib',
      'Exploratory Data Analysis',
      'Mini Project: Data Insights Dashboard',
    ],
    resources: [
      { name: 'Python Docs', link: 'https://docs.python.org/3/' },
      { name: 'Pandas Docs', link: 'https://pandas.pydata.org/docs/' },
      { name: 'NumPy Docs', link: 'https://numpy.org/doc/' },
    ],
  },
];
export default function CourseDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const course = courses.find(c => c.id === id) || courses[0]; // Fallback to first course for demo

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Course Not Found</h2>
          <p className="text-gray-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'lessons', label: 'Curriculum', icon: Play },
    { id: 'resources', label: 'Resources', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course Image */}
              <div className="lg:col-span-1">
                <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Course Info */}
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
                    {course.category}
                  </span>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{course.title}</h1>
                  <p className="text-lg text-gray-600 mb-6">{course.description}</p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{course.level}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="font-medium text-gray-900">{course.instructor}</p>
                  </div>
                </div>

                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Start Learning</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Course</h3>
                <p className="text-gray-700 leading-relaxed">{course.overview}</p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn</h4>
                    <ul className="space-y-2">
                      {course.lessons.slice(0, 3).map((lesson, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Prerequisites</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Basic React knowledge
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        JavaScript ES6+ proficiency
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        HTML & CSS fundamentals
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lessons' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Course Curriculum</h3>
                  <span className="text-sm text-gray-500">{course.lessons.length} lessons</span>
                </div>
                
                <div className="space-y-3">
                  {course.lessons.map((lesson, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200">
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-medium">
                            {i + 1}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{lesson}</h4>
                            <p className="text-sm text-gray-500">Duration: {Math.floor(Math.random() * 20 + 10)} minutes</p>
                          </div>
                        </div>
                        <Play className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional Resources</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.resources.map((resource, i) => (
                    <a
                      key={i}
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                              {resource.name}
                            </h4>
                            <p className="text-sm text-gray-500">External Resource</p>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
                  <p className="text-gray-700 mb-4">
                    Join our community of learners and get support from instructors and peers.
                  </p>
                  <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg border border-gray-300 transition-colors duration-200">
                    Join Community
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}