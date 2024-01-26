import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home'
import Footer from "./Components/Share/Footer";
import Header from "./Components/Share/Header";
import Services from "./Components/Service/Services";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={ <Home />} /> 
          <Route path="/services" element={ <Services/>} /> 
          <Route path="/about" element={ <About/>} /> 
          <Route path="/contact" element={ <Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);