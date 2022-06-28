import "./globalStyles.scss";
import Home from "./Page/HomePage/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./Page/Footer/Footer";
import "./responsive.scss";
import About from "./Page/AboutPage/About";
import Navbar from "./Page/Navbar/Navbar";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <ScrollToTop>
      <div className="App">
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          {/* No navbar section */}
        </Routes>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
