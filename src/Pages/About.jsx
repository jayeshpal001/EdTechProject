import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
  <div className="bg-gray-50 min-h-screen px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About LearnEdge</h1>
        <p className="text-gray-600 text-lg">
          LearnEdge is an EdTech platform built to empower learners of all ages.
          Our goal is to make education accessible, engaging, and career-focused — anywhere, anytime.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          We aim to transform traditional learning by offering high-quality courses taught by
          industry experts. From coding bootcamps to business skills, our platform helps students,
          job seekers, and working professionals achieve their personal and career goals.
        </p>
      </section>

      {/* Features / Benefits Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Affordable Courses</h3>
          <p className="text-gray-600 text-sm">
            Learn the latest skills without breaking the bank. Pay once and learn forever.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Expert Instructors</h3>
          <p className="text-gray-600 text-sm">
            Learn from experienced mentors who guide you with real-world knowledge.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Lifetime Access</h3>
          <p className="text-gray-600 text-sm">
            Access your courses anytime, on any device, with lifetime updates and support.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join thousands of learners today</h2>
        <p className="text-gray-600 mb-6">Start your journey toward success with LearnEdge.</p>
      <Link to="/">  <button  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Browse Courses
        </button>
        </Link> 
      </section>
    </div>
  )
}

export default About
