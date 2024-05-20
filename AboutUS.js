import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">About Us: Women Empowerment</h1>

        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante ut velit lacinia viverra. 
            Fusce ultrices felis at quam vehicula, in congue neque placerat.
          </p>
        </section>

        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
          <p className="text-white">
            Nulla facilisi. Proin id massa eget augue condimentum consequat sit amet at dui. Vivamus interdum 
            diam id risus sodales convallis. Suspendisse potenti.
          </p>
        </section>

        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-white">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
            <li>Ut enim ad minim veniam</li>
          </ul>
        </section>

        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Jane Doe</h3>
              <p className="text-gray-600">Co-founder & CEO</p>
            </div>
            
          </div>
        </section>

        
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante ut velit lacinia viverra."
              </p>
              <p className="text-gray-600 mt-4">- John Doe</p>
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
