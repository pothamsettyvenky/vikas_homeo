import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import VikasClinic from "./Pages/VikasClinic";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/vikas-Homeopathy" element={<VikasClinic />} />
      </Routes>
    </>
  );
}

export default App;
