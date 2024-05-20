import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Home";
import Registration from "./components/Registration";
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider, { useAuth } from './components/AuthContext';
import NGOs from "./components/NGOs";
import ForgotPassword from './components/ForgotPassword';
import STEP from './components/STEP';
import About from './components/About';
import Admin2 from './components/Admin2';
import FAQ from './components/FAQ';
import Legislation from './components/Legislation'; 
import AboutUs from './components/AboutUS'
import Training from "./components/Training";
import Guidelines from './components/Guidelines';
import Status from './components/Status';
import MainNGO from "./components/MainNGO";
import Loginngo from "./components/Loginngo";
import Registerngo from './components/Registerngo';
import Criteria from "./components/Criteria";
import Organizations from "./components/Organizations";
import Funding from "./components/Funding";
import Statusngo from "./components/Statusngo";
import FAQngo from "./components/FAQngo";
import Orgreg from './components/Orgreg';
import AdminLogin from "./components/Adminlogin";


const App=()=> {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/loginngo" element={<Loginngo/>}/>
            <Route path="/registerngo" element={<Registerngo/>}/>
            <Route path="/adminlogin" element={<AdminLogin/>}/>


            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/step" element={<STEP/>} />
            <Route path="/ngo" element={<MainNGO/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/legislation" element={<Legislation/>}/> 
            <Route path="/admin" element={<Admin2/>}/>
            <Route path="/faq"element={<FAQ/>}/> 



            <Route path="/step/about" element={<AboutUs />} />
            <Route path="/step/training" element={<Training />}/>
            <Route path="/step/registration" element={<Registration />} />
            <Route path="/step/guidelines" element={<Guidelines />} />
            <Route path="/step/status" element={<Status />} />
            <Route path="/step/faq" element={<FAQ />} />
            <Route path="/ngos" element={<NGOs />} />
            


        <Route path="/ngo/criteria" element={<Criteria />} />
        <Route path="/ngo/organizations" element={<Organizations />} />
        <Route path="/ngo/funding" element={<Funding />} />
        <Route path="/ngo/orgreg" element={<Orgreg />} />
        <Route path="/ngo/status" element={<Statusngo />} />
        <Route path="/ngo/faqngo" element={<FAQngo />} />

            {/* <Route path="agriculture" element={<Agriculture />} />
            <Route path="tailoring" element={<Tailoring />} />
            <Route path="stitching" element={<Stitching />} /> */}
            
           

        </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


