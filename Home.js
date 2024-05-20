import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "./components/Header";
import img from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const Home = () => {
    return (
        <div className="home-page bg-blue-100 min-h-screen flex flex-col justify-between">
            <Header />
            <div className="container mx-auto my-16 py-6 flex-1">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-3/4 mb-8 lg:mb-0 px-5">
                        <Carousel 
                            showArrows={true} 
                            infiniteLoop={true} 
                            autoPlay={true} 
                            interval={3000} 
                            stopOnHover={true} 
                            showThumbs={false} 
                            className="rounded-lg shadow-lg overflow-hidden"
                        >
                            <div>
                                <img src={img} alt="Slide 1" />
                                <p className="legend">Slide 1</p>
                            </div>
                            <div>
                                <img src={img2} alt="Slide 2" />
                                <p className="legend">Slide 2</p>
                            </div>
                            <div>
                                <img src={img3} alt="Slide 3" />
                                <p className="legend">Slide 3</p>
                            </div>
                        </Carousel>
                    </div>
                    <div className="w-full lg:w-1/4 flex flex-col space-y-6 lg:ml-34"> 
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Introduction</h2>
                            <p className="text-gray-700">Women empowerment is a pivotal force in driving global progress and fostering a more equitable society.</p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300">Read More</button>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Economic Empowerment</h2>
                            <p className="text-gray-700">Economic empowerment of women is essential for sustainable development. By providing women with equal access to education, job opportunities, and financial resources.</p>
                            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-300">Read More</button>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="text-xl font-bold mb-4">Education and Awareness</h2>
                            <p className="text-gray-700">Education is the cornerstone of empowerment. Ensuring that girls and women have access to quality education equips them with the knowledge and skills necessary to navigate and influence the world around them.</p>
                            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-300">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-8">
                <div className="container mx-auto px-5">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                            <ul className="text-sm">
                                <li>Email: contact@example.com</li>
                                <li>Phone: +123 456 7890</li>
                                <li>Address: 123 Main St, City, Country</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-white p-2 rounded-full text-pink-500 hover:bg-gray-200 transition duration-300">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="bg-white p-2 rounded-full text-pink-500 hover:bg-gray-200 transition duration-300">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="bg-white p-2 rounded-full text-pink-500 hover:bg-gray-200 transition duration-300">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="bg-white p-2 rounded-full text-pink-500 hover:bg-gray-200 transition duration-300">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 text-center md:text-right">
                            <p className="text-sm">Designed by <span className="font-bold">Rajat Goel</span></p>
                            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
