import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import VikasClinic from "./Pages/Doctors/VikasClinic";
import { Route, Routes } from "react-router-dom";
import Sandhya from "./Pages/Doctors/Sandhya";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/dr-vikas" element={<VikasClinic />} />
        <Route path= "/about/dr-Sandhya" element={<Sandhya/>}/>
      </Routes>
    </>
  );
}

export default App;
