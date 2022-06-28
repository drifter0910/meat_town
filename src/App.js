import "./globalStyles.scss";
import Home from "./Page/HomePage/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./Page/Footer/Footer";
import "./responsive.scss";
import About from "./Page/AboutPage/About";
import Navbar from "./Page/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* No navbar section */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
