import React from 'react';
import { Link } from 'react-router-dom';
import img from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import Home from '../Home';

const About = () => {
    return (
        <div className="about-page bg-gray-100 min-h-screen py-12">
          <div>
          <Link to={'/'}>
    <button className="px-6 py-2 bg-blue-500 text-white mx-5 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
        Home
    </button>
</Link>
</div>
            
            <div className="container mx-auto px-6 lg:px-20">
                <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">About Us</h1>
                <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
                    We are dedicated to empowering women around the world by providing resources, education, and support to help them achieve their fullest potential. Our mission is to create a society where women are valued, respected, and given equal opportunities to succeed.
                </p>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-pink-600 mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-4">
                            Our mission is to empower women through education, advocacy, and support. We strive to create a world where women have equal opportunities and are able to participate fully in all aspects of life.
                        </p>
                        <p className="text-gray-700">
                            We provide programs and services that help women gain the skills, knowledge, and confidence they need to achieve their goals. Join us in our mission to empower women and create a brighter future for all.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-pink-600 mb-4">Our Vision</h2>
                        <p className="text-gray-700 mb-4">
                            Our vision is a world where women are empowered to reach their full potential. We envision a society where women have equal rights and opportunities, and where their contributions are recognized and valued.
                        </p>
                        <p className="text-gray-700">
                            We work towards this vision by advocating for gender equality, providing educational opportunities, and supporting women in their personal and professional development.
                        </p>
                    </div>
                </div>
                <div className="my-16 text-center">
                    <h2 className="text-3xl font-bold text-pink-600 mb-6">Join Our Community</h2>
                    <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
                        Become a part of our community and help us empower women around the world. Whether you want to volunteer, donate, or participate in our programs, there are many ways to get involved.
                    </p>
                    <Link to="/contact" className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition duration-300">
                        Contact Us
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center mt-12">
                    <div className="w-full md:w-1/3 p-4">
                        <img src={img} alt="Empowered Women" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <img src={img2} alt="Education and Empowerment" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <img src={img3} alt="Community Support" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
