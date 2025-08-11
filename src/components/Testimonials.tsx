// File: src/components/Testimonials.tsx
"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick (client-side only)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const testimonials = [
  {
    name: "Aarav Kumar",
    feedback:
      "LearnSphere transformed the way I study! The AI tutor is like having a personal teacher 24/7.",
    role: "Student",
  },
  {
    name: "Priya Mehta",
    feedback:
      "The adaptive quizzes helped me focus on my weak areas. Highly recommend for exam prep!",
    role: "College Aspirant",
  },
  {
    name: "Rahul Verma",
    feedback:
      "As a parent, I love tracking my child’s progress. The reports are clear and actionable.",
    role: "Parent",
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          What Our Learners Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-6">
              <div className="bg-indigo-50 p-6 rounded-lg shadow">
                <p className="text-lg italic mb-4">“{t.feedback}”</p>
                <h4 className="font-semibold text-indigo-600">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
