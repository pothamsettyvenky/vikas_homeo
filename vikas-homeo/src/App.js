import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import VikasClinic from "./Pages/Doctors/VikasClinic";
import { Route, Routes } from "react-router-dom";
import Sandhya from "./Pages/Doctors/Sandhya";
import HomeopathyKit from "./components/HomeopathyKit";
import Footer from "../src/Pages/Footer/Footer"
import VikasHomoeo from "./Pages/VikasHomoeo/VikasHomoeo";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/dr-vikas" element={<VikasClinic />} />
        <Route path="/about/dr-Sandhya" element={<Sandhya />} />
        <Route path="/Homeopathy_Kit" element={<HomeopathyKit />} />
        <Route path="/about/vikas-homeopathy" element={<VikasHomoeo/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
