"use client";
import React, { useEffect, useState } from "react";



import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
//import { Client } from "pg-promise/typescript/pg-subset";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

const FloatingOrbs = () => {
  const [positions, setPositions] = useState<{ orb1: any; orb2: any } | null>(null);

  useEffect(() => {
    const updatePositions = () => {
      setPositions({
        orb1: {
          left: `${Math.sin(Date.now() / 10000) * 100 + 20}%`,
          top: `${Math.cos(Date.now() / 8000) * 50 + 10}%`,
        },
        orb2: {
          right: `${Math.sin(Date.now() / 12000 + Math.PI) * 80 + 10}%`,
          bottom: `${Math.cos(Date.now() / 9000 + Math.PI) * 60 + 20}%`,
        },
      });
    };
    updatePositions();
    const interval = setInterval(updatePositions, 1000 / 30); // ~30 FPS
    return () => clearInterval(interval);
  }, []);

  if (!positions) return null; // render nothing until client has calculated positions

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-float-slow"
        style={positions.orb1}
      />
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-blue-300/15 to-indigo-300/15 rounded-full blur-2xl animate-float-fast"
        style={positions.orb2}
      />
    </div>
  );
};


const ParallaxCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-50 transition-all duration-100 ease-out"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transform: 'scale(0.8)'
      }}
    />
  );
};


  return (
    <div className="relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        @keyframes fadeInScale {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.5), 0 0 60px rgba(99, 102, 241, 0.2); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-in {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-10px) rotate(2deg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .btn-glow:hover {
          animation: glow 2s ease-in-out infinite;
        }
        .shimmer-effect {
          position: relative;
          overflow: hidden;
        }
        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-100%);
          animation: shimmer 2s infinite;
        }
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      
      <ParallaxCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 pb-16 min-h-screen flex items-center">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            id="hero-content"
            data-animate
            className={`transition-all duration-1000 ${
              isVisible['hero-content'] ? 'animate-in' : 'opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              LearnSphere
            </h1>
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Your Personalized Learning Universe – Adaptive, Interactive, and
                <span className="text-indigo-600 font-semibold"> AI-Driven</span>.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/30 to-transparent blur-xl opacity-50"></div>
            </div>
          </div>
          
          <div
            id="hero-buttons"
            data-animate
            className={`mt-12 flex flex-col sm:flex-row justify-center gap-6 transition-all duration-1000 delay-300 ${
              isVisible['hero-buttons'] ? 'animate-in' : 'opacity-0'
            }`}
          >
            <button className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg btn-glow overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shimmer-effect">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group bg-white/80 backdrop-blur-sm border-2 border-indigo-200 text-indigo-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="group-hover:text-indigo-800 transition-colors">Learn More</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            id="features-header"
            data-animate
            className={`text-center mb-16 transition-all duration-800 ${
              isVisible['features-header'] ? 'animate-scale' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Platform <span className="text-gradient">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Adaptive Learning",
                description: "AI-driven learning paths that adjust to your pace and style.",
                icon: "🧠",
                gradient: "from-blue-400 to-indigo-600"
              },
              {
                title: "AI Chat Tutor",
                description: "Get instant answers, explanations, and feedback from your AI tutor.",
                icon: "🤖",
                gradient: "from-indigo-400 to-purple-600"
              },
              {
                title: "Gamification",
                description: "Earn badges, track streaks, and compete on leaderboards.",
                icon: "🎮",
                gradient: "from-purple-400 to-pink-600"
              },
              {
                title: "Community",
                description: "Join discussions, share knowledge, and learn together.",
                icon: "👥",
                gradient: "from-pink-400 to-red-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`card-hover bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-800 delay-${index * 100} ${
                  isVisible[`feature-${index}`] ? 'animate-in' : 'opacity-0'
                }`}
              >
                <div className={`text-5xl mb-6 bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            id="how-it-works-header"
            data-animate
            className={`text-center mb-16 transition-all duration-800 ${
              isVisible['how-it-works-header'] ? 'animate-scale' : 'opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps and begin your learning journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Sign Up & Personalize",
                description: "Create your profile, choose subjects, and set your learning style.",
                color: "from-blue-500 to-indigo-600"
              },
              {
                step: "2", 
                title: "Learn with AI",
                description: "Follow AI-powered lessons, quizzes, and interactive exercises.",
                color: "from-indigo-500 to-purple-600"
              },
              {
                step: "3",
                title: "Track & Achieve", 
                description: "Monitor progress, earn badges, and celebrate achievements.",
                color: "from-purple-500 to-pink-600"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {/* Connecting Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 z-0"></div>
                )}
                
                <div
                  id={`step-${index}`}
                  data-animate
                  className={`card-hover bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 relative z-10 transition-all duration-800 delay-${index * 200} ${
                    isVisible[`step-${index}`] ? 'animate-in' : 'opacity-0'
                  }`}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.color} text-white text-3xl font-bold mb-6 mx-auto rounded-2xl flex items-center justify-center shadow-lg`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      <Footer />
    </div>
  );
}