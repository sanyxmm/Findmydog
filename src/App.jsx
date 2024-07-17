import React, { useState, useEffect, useContext } from "react";
import { AppProvider } from "./context";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Working from "./Pages/Working/Working";
import Search from "./Pages/Search/Search";
import Help from './Pages/Help/Help';
import PetRegistration from "./Pages/PetRegistration/PetRegistration";
import Footer from "./Components/Foot/Footer";
import dogy from './animation-gif.gif';
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
          <div id="dogy"><img src={dogy} width="300px" height="300px"></img></div>:
             <div > 
               <Navbar/>

               <div id="Home"><Home/></div>
               <div id="RegisterPet"><PetRegistration/></div>
               <div id="Search"><Search/></div>
               <div id="About us"><Working/></div>
               <div id="Help"><Help/></div>          
              
               <Footer/>
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
                  <Route path="/Help" element={<Help />} />
                  <Route path="/Page4" element={<Page4 />} />
                  <Route path="/Page7" element={<Page7 />} />
            </Routes> */}