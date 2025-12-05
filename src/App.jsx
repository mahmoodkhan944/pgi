import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ContactInformation from "./components/ContactInformation";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import CompanyStrategy from "./components/CompanyStrategy";
import CoreValues from "./components/CoreValues";
import Objectives from "./components/Objectives";
import Experience from "./components/Experience";
import Login from "./components/SignIn";
import Register from "./components/Register";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contactinfo.scss";
import "./styles/mediaquery.scss";
import "./styles/login.scss";
import "./styles/register.scss";
import './responsive.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactinfo" element={<ContactInformation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/companystrategy" element={<CompanyStrategy />} />
          <Route path="/corevalues" element={<CoreValues />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

