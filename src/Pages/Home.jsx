import React from 'react';
import courses from '../utils/courses';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
          Learn Anytime, Anywhere
        </h1>
        <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
          Buy courses and get access for 3 months with secure, high-quality video streaming.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition">
          Explore Courses
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Secure Videos</h3>
            <p>Videos protected with download prevention & token-based security.</p>
          </div>
          <div className="shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">3-Month Access</h3>
            <p>Get full access to your purchased courses for 3 months.</p>
          </div>
          <div className="shadow-lg p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Easy Payment</h3>
            <p>Pay securely via Razorpay and start learning instantly.</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
     <section className="bg-gray-100 py-16 px-8 text-center">
  <h2 className="text-3xl font-bold mb-8">Our Top Courses</h2>
  <div className="grid md:grid-cols-3 gap-8">
   {courses.map((course) => (
  <div key={course.id} className="bg-white p-6 rounded-xl shadow-lg">
    <img src={course.image} alt={course.title} className="w-full h-40 object-cover mb-4 rounded" />
    <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
    <p className="mb-2">{course.description}</p>
    <p className="mb-4 font-bold">{course.price}</p>

    {/* Correct Routing Button */}
    <Link to={`/course/${course.id}`}>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
        View Details
      </button>
    </Link>
  </div>
))}

  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="mb-4 italic">"Amazing platform! I loved the course structure and video quality."</p>
            <h4 className="font-semibold">- Prashant</h4>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="mb-4 italic">"Payment and access were super smooth, highly recommended."</p>
            <h4 className="font-semibold">- Gautam</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg hover:bg-gray-200 transition">
          Browse Courses
        </button>
      </section>

    </div>
  );
}

export default Home;
