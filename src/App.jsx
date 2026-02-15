import Navbar from "./components/layout-contact/Navbar";
import Footer from "./components/layout-contact/footer";
import Hero from "./components/layout-contact/Hero";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Routes, Route, Router } from "react-router-dom";
import Contact from "./pages/Contact";
import BlogPost from "./components/layout-blog/Blogpost";
import ScrollToTop from "./components/ScrollTop"; 

function App() {
  return (
     <div>
  
     

  <ScrollToTop />
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    
    {/* This dynamic segment :id handles all posts (1, 2, 3, 4, etc.) */}
    <Route path="/blog/:id" element={<BlogPost />} />
  </Routes>
  <Footer />

   
        </div>
   
  );
} 

export default App;
