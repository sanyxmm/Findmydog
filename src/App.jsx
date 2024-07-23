import React, { useState, useEffect, useContext } from "react";
import { AppProvider } from "./context";
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Foot/Footer";
import Home from './Pages/Home/Home';
import PetRegistration from "./Pages/PetRegistration/PetRegistration";
import Search from "./Pages/Search/Search";
import Help from "./Pages/Help/Help";
import Working from "./Pages/Working/Working";
import animation from './animation-gif.gif';
import './App.css';
import Quote from "./Pages/Quote/Quote";

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
          <div id="snuf"><img src={animation} width="300px" height="300px"></img></div>:
             <div > 
               <Navbar/>
               <div id="Home"><Home/></div>
               <div id="RegisterPet"><PetRegistration/></div>
               <div id="Search"><Search/></div>
               <Quote/>
               <div id="Working"><Working/></div>
               <div id="Help"><Help/></div>
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