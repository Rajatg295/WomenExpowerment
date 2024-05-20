import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useState } from 'react';


const AboutUs = () => <h2>About Us Page</h2>;
const Guidelines = () => <h2>Guidelines Page</h2>;
const Registration = () => <h2>Registration Page</h2>;
const Status = () => <h2>Status Page</h2>;
const FAQ = () => <h2>FAQ Page</h2>;

const TrainingProgrammes = () => {
  return (
    <div className="training-programmes">
      <h2>Training Programmes Page</h2>
      <ul className="nested-navlinks">
        <li><Link to="/agriculture">Agriculture</Link></li>
        <li><Link to="/tailoring">Tailoring</Link></li>
        <li><Link to="/stitching">Stitching</Link></li>
      </ul>
      <Outlet/>
    </div>
  );
};
const Agriculture = () => <h3>Agriculture Training Programme</h3>;
const Tailoring = () => <h3>Tailoring Training Programme</h3>;
const Stitching = () => <h3>Stitching Training Programme</h3>;

const STEP = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
      logout(); 
    navigate('/login');
  };

  return (
    <>
    
      <div className="step1 flex items-center justify-between h-14 w-full px-4 bg-gray-100 shadow-md">
        <ul className="flex items-center space-x-4">
          <li className="text-xl font-semibold"><Link to="/">Home</Link></li>
        </ul>
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Contact Us</button>
         
          <button onClick={handleLogout} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Logout</button>
        </div>
      </div>
      <div className="step-dashboard p-8 bg-blue-400 shadow-md rounded-lg mt-2">
      <h1 className="text-3xl font-bold mb-6 text-white">STEP Dashboard</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/step/about" className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300">
              About us
            </Link>
          </li>
          <li>
            <Link to="/step/guidelines" className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
              Guidelines
            </Link>
          </li>
          <li 
            className="relative" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="/step/training" className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Training Programmes
            </Link>
            {isDropdownOpen && (
              <ul className="absolute mt-2 bg-white border rounded-md shadow-md py-2 px-4 space-y-2 z-10">
                <li>
                  <Link to="/step/training/agriculture" className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                    Agriculture
                  </Link>
                </li>
                <li>
                  <Link to="/step/training/tailoring" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                    Tailoring
                  </Link>
                </li>
                <li>
                  <Link to="/step/training/stitching" className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
                    Stitching
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/ngos" className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition duration-300">
              NGOs
            </Link>
          </li>
          <li>
            <Link to="/step/registration" className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
              Registration
            </Link>
          </li>
          <li>
            <Link to="/step/status" className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
              Status
            </Link>
          </li>
          <li>
            <Link to="/step/faq" className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition duration-300">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
    </div>

      <Outlet />
      
      <div className="p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">Additional Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Overview</h3>
            <p>"STEP (Support to Training and Employment Programme for Women) is an initiative aimed at empowering women through skill development and employment opportunities. Launched by the Ministry of Women and Child Development, Government of India, STEP focuses on enhancing the employability of women by providing them with training in various sectors."

            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Objectives</h3>
            <p>"The primary objectives of the STEP program are to equip women with marketable skills, promote entrepreneurship among women, and facilitate their entry into the workforce. By imparting vocational training and fostering self-reliance, STEP aims to contribute to the socioeconomic empowerment of women across different regions."

</p>
          </div>
      
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Impact and Success Stories</h3>
            <p>"Since its inception, STEP has made significant strides in empowering women and transforming their lives. Through targeted training programs and employment support, many women have gained access to better job opportunities, increased their earning potential, and achieved financial independence. Success stories abound, showcasing how STEP has positively impacted the lives of countless women, empowering them to pursue their aspirations and contribute meaningfully to their communities."

            </p>
          </div>
        </div>
      </div>
     
   
    </>
  );
};

export default STEP;
