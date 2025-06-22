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
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <img src={course.image} alt={course.title} className="w-full md:w-1/2 rounded mb-8" />
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg mb-4 max-w-2xl text-center">{course.description}</p>
      <p className="text-2xl font-semibold mb-6">{course.price}</p>
      <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
        Buy Now
      </button>
    </div>
  );
}

export default CourseDetail;
