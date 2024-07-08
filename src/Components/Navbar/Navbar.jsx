import React ,{ useState}  from 'react'
import './Navbar.css'
import Form from './Form/Form'
const Navbar = ({onButtonClick,Menu,register}) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
  
    const openOwner = () => {
      setIsFormOpen(!isFormOpen);
    };
    const closeOwner = () => {
      setIsFormOpen(!isFormOpen);
    };
  return (
    <div className={`navbar ${Menu || register ? 'blur-background' : ''}`}>
      <h1>FindMyPet</h1>
      <div className='navbtns'>
        <a href="/">Home</a>
        <a href="/">Search</a>
        <a href="/">Help</a>
        <a href="#" onClick={openOwner}>Owner</a>
        <a href="/">About us</a>
      </div>
      <div><button onClick={onButtonClick}>Sign in</button></div>
      {isFormOpen && <Form closeOwner={closeOwner} />}
    </div>
  )
}

export default Navbar
