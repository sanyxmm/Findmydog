import React ,{ useState,useEffect } from 'react'
// import DotLoader from "react-spinners/DotLoader"
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import './App.css'

function App() {
  
  //popup menu
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
 

  //loading animation
  // const [anima,setanima] = useState(true);
  // useEffect(() =>{
  //     setanima(true)
  //     setTimeout(() => {
  //         setanima(false);
  //     }, 3000);
  //  },[]);
  
  return (
    <div className="App">
    { 
    
      // anima ?
      // <DotLoader  color={'#ffffff'} anima={anima} size={50} className="loader"/>
      // :
      <div >
         <div className='page1'>
         <Navbar onButtonClick={openMenu} Menu={Menu} register={register} />
         <Home Menu={Menu} register={register} closeMenu={closeMenu} openRegister={openRegister} closeRegister ={closeRegister} />
         </div>
      </div>
    }
    </div>
  );
  }
export default App;
