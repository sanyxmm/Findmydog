import React, { useState, useEffect, useContext } from "react";
import { AppProvider } from "./context";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Page3 from './Pages/Page3/Page3';
import Page4 from './Pages/Page4/Page4';
import Page5 from "./Pages/Page5/Page5";
import Page6 from './Pages/Page6/Page6';
import Page7 from './Pages/Page7/Page7';
import Footer from "./Components/Foot/Footer";
import d3 from './dg3.gif';
import './App.css';

function App() {
  // loading animation
  const [anima, setanima] = useState(true);
  useEffect(() => {
    setanima(true)
    setTimeout(() => {
      setanima(false);
    }, 1000);
  }, []);

  return (
      <AppProvider>
      <div>
        <div className="App">{anima ?
          <div id="snuf"><img src={d3} width="300px" height="300px"></img></div>:
             <div > 
               <Navbar/>
               <div id="Home"><Home/></div>
               <div id="Search"><Page5/></div>
               <div ><Page3/></div>
               <div id="Help"><Page6/></div>
               <div><Page4/></div>
               <div id="RegisterPet"><Page7/></div>
               <div id="Aboutus"><Footer/></div>
            </div>}
        </div>
      </div>
      </AppProvider>
  );
}

export default App;


  {/* <Navbar/> */}
            {/* <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Page3" element={<Page3 />} />
                  <Route path="/Page6" element={<Page6 />} />
                  <Route path="/Page4" element={<Page4 />} />
                  <Route path="/Page7" element={<Page7 />} />
            </Routes> */}