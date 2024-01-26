import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home'
import Footer from "./Components/Share/Footer";
import Header from "./Components/Share/Header";
import SoftDev from "./Components/WorkFlow/SoftDev";
import WebDev from "./Components/WorkFlow/WebDev";
import CyberSceurity from './Components/WorkFlow/CyberSecurity'
import CloudSolutions from './Components/WorkFlow/CloudSolutions'
import DigitalMarketing from './Components/WorkFlow/DigitalMarketing'
import DataAnaly from './Components/WorkFlow/DataAnaly'
// import { useState } from "react";


export default function App() {
  // const [isLogged, setIsLogged]=useState(false);
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={ <Home />} /> 
          <Route path="/workflow" element={<SoftDev/>}/>
          <Route path="/webdev" element={<WebDev/>}/>
          <Route path="/CyberSecurity" element={<CyberSceurity/>}/>
          <Route path="/CloudSolutions" element={<CloudSolutions/> }/>
          <Route path="/DigitalMarketing" element={<DigitalMarketing/> }/>
          <Route path="/dataanaly" element={<DataAnaly/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);