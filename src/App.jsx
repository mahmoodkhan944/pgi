import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ContactInformation from "./components/ContactInformation";
import Projects from "./components/Projects";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contactinfo.scss";
import "./styles/mediaquery.scss";


function App() {



    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contactinfo" element={<ContactInformation />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </Router>


        </>
    )
}

export default App;