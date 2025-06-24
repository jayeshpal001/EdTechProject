import React, { useState } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: 'Jayash',
    lastName: 'Pal',
    headline: '',
    biography: '',
    website: '',
    linkdIn: '',
    instagram: ''
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">

      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white p-6 border-r">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gray-900 text-white w-20 h-20 flex items-center justify-center rounded-full text-3xl">
            JP
          </div>
          <h2 className="text-xl font-semibold">Jayash Pal</h2>
          <nav className="w-full space-y-2">
            <link to="#" className="block px-4 py-2 hover:bg-gray-200 rounded">View Public Profile</link>
            <link to="#" className="block px-4 py-2 hover:bg-gray-200 rounded font-semibold bg-gray-200">Profile</link>
            <link to="#" className="block px-4 py-2 hover:bg-gray-200 rounded">Photo</link>
            <link to="#" className="block px-4 py-2 hover:bg-gray-200 rounded">Account Security</link>
            <link to="#" className="block px-4 py-2 hover:bg-gray-200 rounded">Subscriptions</link>
            <link to="#" className="block px-4 py-2 hover:bg-gray-200 rounded">Payment Methods</link>
            <link to="#" className="block px-4 py-2 hover:bg-gray-200 rounded">Privacy</link>
            <link to="#" className="block px-4 py-2 hover:bg-gray-200 rounded">Notification Preferences</link>
            <link to="#" className="block px-4 py-2 hover:bg-gray-200 rounded">Close Account</link>
          </nav>
        </div>
      </aside>

      {/* Profile Form */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Public Profile</h1>

        <div className="space-y-6">
          {/* Basics */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Basics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={profile.firstName}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={profile.lastName}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
            </div>
            <input
              type="text"
              name="headline"
              placeholder="Headline"
              value={profile.headline}
              onChange={handleChange}
              className="w-full border p-3 rounded mt-4"
            />
            <p className="text-gray-500 text-sm mt-1">
              Add a professional headline like "Instructor at Udemy" or "Architect."
            </p>
          </div>

          {/* Biography */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Biography</h2>
            <textarea
              name="biography"
              placeholder="Biography"
              rows="5"
              value={profile.biography}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            ></textarea>
            <p className="text-gray-500 text-sm mt-1">Links and coupon codes are not permitted in this section.</p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="website"
                placeholder="Website (http://...)"
                value={profile.website}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
              <input
                type="text"
                name="linkdIn"
                placeholder="linkdIn.com/ Username"
                value={profile.linkdIn}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
              <input
                type="text"
                name="instagram"
                placeholder="instagram.com/ Username"
                value={profile.instagram}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
            </div>
          </div>

          <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
            Save Profile
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
