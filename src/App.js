import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Notfound from "./components/NotFound/Notfound";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Development from "./components/Services/Development/Development";
import CyberSecurity from "./components/Services/CyberSecurity/CyberSecurity";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/developpement" element={<Development />} />
          <Route path="/services/cybersecurite" element={<CyberSecurity />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/profil/:id" element={<Profile />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
