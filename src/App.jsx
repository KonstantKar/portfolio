import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
