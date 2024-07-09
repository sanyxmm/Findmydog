import React ,{ useState,useEffect } from 'react'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import d3 from './dg3.gif'
import Page3 from './Pages/Page3/Page3';
import Page6 from './Pages/Page6/Page6';
import Page7 from './Pages/Page7/Page7';


function App() {
  
  // popup menu
  const [Menu,setMenu] = useState(false);
  const openMenu = ()=> {
      setMenu(true)
  };
  const closeMenu = ()=> {
    setMenu(false);
  };

  const[register,setregister]=useState(false)
  const openRegister = ()=>{
    setregister(true);
  }
  const closeRegister = ()=>{
    setregister(false);
  }
  useEffect(() => {
      closeMenu();
  }, [register]);
 

  // loading animation
  const [anima,setanima] = useState(true);
  useEffect(() =>{
      setanima(true)
      setTimeout(() => {
          setanima(false);
      }, 3000);
   },[]);
  
  return (
    <div>
      <div className="App">
    { 
      anima ?
      <div id="snuf"><img  src={d3} width="300px" height="300px"></img></div>
      :
      <div >
         <div className='page1'>
         <Navbar onButtonClick={openMenu} Menu={Menu} register={register} />
         <Home Menu={Menu} register={register} closeMenu={closeMenu} openRegister={openRegister} closeRegister ={closeRegister} />
         </div>
         <Page3/>
         <Page6/>
         <Page7/>
      </div>
    }
    </div>
    </div>
  );
  }
export default App;
