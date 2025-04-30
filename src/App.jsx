import { Box } from "@mui/material";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Actions from "./pages/Actions";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Galleries from "./pages/Galleries";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" autoClose={3000} />
      </Box>
    </BrowserRouter>
  );
}

export default App;
