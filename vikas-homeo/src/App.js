import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import VikasClinic from "./Pages/Doctors/VikasClinic";
import { Route, Routes } from "react-router-dom";
import Sandhya from "./Pages/Doctors/Sandhya";
import HomeopathyKit from "./components/HomeopathyKit";
import Footer from "../src/Pages/Footer/Footer"
import VikasHomoeo from "./Pages/VikasHomoeo/VikasHomoeo";
import Contact from "./Pages/Contact/Contact";
import AllTreatments from "./Pages/Treatments/AllTreatments";
import Quotes from "./Pages/Quotes/Quotes"
import News from "./Pages/News/News"
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Credits from "./Pages/Credits/Credits";
import FAQ from "./Pages/Faq/Faq";
import Chatbot from "./components/Chatbot/Chatbot";
function App() {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/dr-vikas" element={<VikasClinic />} />
        <Route path="/about/dr-Sandhya" element={<Sandhya />} />
        <Route path="/Homeopathy_Kit" element={<HomeopathyKit />} />
        <Route path="/about/vikas-homeopathy" element={<VikasHomoeo/>}/>
        <Route path = "/Contact" element={<Contact/>}/>
        <Route path = "/treatments" element={<AllTreatments/>}/>
        <Route path="/quotes" element= {<Quotes/>}/>
        <Route path="/news" element = {<News/>}/>
        <Route path= "/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/credits" element={<Credits/>}/>
        <Route path="faqs" element={<FAQ/>}/>
      </Routes>
      <Chatbot/>
      <Footer />

    </>
  );
}

export default App;
