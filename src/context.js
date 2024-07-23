import { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [Menu, setMenu] = useState(false);
  const [navbtns, setNav] = useState(false);
  const [register, setRegister] = useState(false);
  const [register2, setRegister2] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
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

  useEffect(() => {
    closeMenu();
}, [register]);


  return (
    <AppContext.Provider
      value={{
        Menu,
        register,
        navbtns,
        register2,
        isFormOpen,
        animation,
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