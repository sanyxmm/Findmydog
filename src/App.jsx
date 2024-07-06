import React ,{ useState,useEffect } from 'react'
import DotLoader from "react-spinners/DotLoader"
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import './App.css'

function App() {
  //popup menu
  const [Menu,setMenu] = useState(false);
  const openMenu = ()=> {
      setMenu(!Menu)
  };
  const closeMenu = ()=> {
    setMenu(!Menu);
  };

  //loading animation
  const [anima,setanima] = useState(true);
  useEffect(() =>{
      setanima(true)
      setTimeout(() => {
          setanima(false);
      }, 3000);
   },[]);
  
  return (
    <div className="App">
    { 
      anima ?
      <DotLoader  color={'#ffffff'} anima={anima} size={50} className="loader"/>
      :
      <div >
         <div className='page1'>
         <Navbar onButtonClick={openMenu} Menu={Menu} />
         <Home Menu={Menu}/>
         </div>
      </div>
    }
    </div>
  );
  }
export default App;
