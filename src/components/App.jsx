import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import PageNotFound from './PageNotFound';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* Static components like Nav and Footer */}
      <Nav /> 

      {/* Dynamic routing */}
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PageNotFound" element={<PageNotFound />} />

        {/* Redirect any unknown routes */}
        <Route path="*" element={<Navigate to="/PageNotFound" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
