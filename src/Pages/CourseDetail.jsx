import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../utils/courses';

function CourseDetail() {
  const { id } = useParams(); // Get Course ID from URL
  const course = courses.find((c) => c.id === parseInt(id)); // Find Course from dummy data

  if (!course) {
    return <h2 className="text-center text-2xl mt-10">Course Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-16 px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-8 p-8">

        {/* Course Image */}
        <div className="flex items-center justify-center">
          <img
            src={course.image}
            alt={course.title}
            className="rounded-lg w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Course Details */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-lg text-gray-600">{course.description}</p>
          <p className="text-3xl font-semibold text-indigo-600">{course.price}</p>

          <div className="flex space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition shadow-lg">
              Buy Now
            </button>

            <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CourseDetail;
