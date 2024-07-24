import { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [Menu, setMenu] = useState(false);
  const [navbtns, setNav] = useState(false);
  const [register, setRegister] = useState(false);
  const [register2, setRegister2] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [logPop,setlogPop] = useState(false);
  const [logchk,setlogchk] = useState(false);
  const [regPop,setregPop] = useState(false);
  const openOwner = () =>  setIsFormOpen(!isFormOpen);
  const closeOwner = () => setIsFormOpen(!isFormOpen);
  const openNav = () => setNav(!navbtns);
  const closeNav = () => setNav(!navbtns);
  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);
  const openRegister = () => setRegister(true);
  const closeRegister = () => setRegister(false);
  const openRegister2 = () => setRegister2(true);
  const closeRegister2 = () => setRegister2(false);
  const setAnimationState = (state) => setAnimation(state);
  const openlogPop =() => setlogPop(true);
  const openlogchk = () => setlogchk(true);
  const closelogchk = () => setlogchk(false);
  const openregPop =() => setregPop(true);
  
  useEffect(() => {
    closeMenu();
}, [register]);
useEffect(() => {
  setTimeout(() => {
    setlogPop(false);
  }, 1000);
}, [logPop]);
useEffect(() => {
  setTimeout(() => {
    setregPop(false);
  }, 2000);
}, [regPop]);

  return (
    <AppContext.Provider
      value={{
        Menu,
        logchk,
        register,
        navbtns,
        register2,
        isFormOpen,
        animation,
        logPop,regPop,
        openlogchk,closelogchk,
        openlogPop,openregPop,
        openOwner,closeOwner,
        openMenu,closeMenu,
        openNav,closeNav,
        openRegister,closeRegister,
        openRegister2,closeRegister2,
        setAnimationState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };