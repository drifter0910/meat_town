import "../src/styles/global.scss";
import Home from "./pages/HomePage/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "../src/styles/responsive.scss";
import About from "./pages/AboutPage/About";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./ScrollToTop";
import Product from "./pages/ProductPage/Product";
import Blog from "./pages/BlogPage/Blog";
import Contact from "./pages/ContactPage/Contact";
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
            <Route path="product" element={<Product />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* No navbar section */}
        </Routes>
        <Footer />
      </div>
    </ScrollToTop>
  );
}

export default App;
