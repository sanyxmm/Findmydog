import React ,{ useState}  from 'react'
import './Navbar.css'
import Form from './Form/Form'
const Navbar = ({onButtonClick,Menu}) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
  
    const toggleForm = () => {
      setIsFormOpen(!isFormOpen);
    };
  return (
    <div className={`navbar ${Menu ? 'blur-background' : ''}`}>
      <h1>FindMyDog</h1>
      <div className='navbtns'>
        <a href="/">Home</a>
        <a href="/">Search</a>
        <a href="/">Help</a>
        <a href="#" onClick={toggleForm}>Owner</a>
        <a href="/">About us</a>
      </div>
      <div><button onClick={onButtonClick}>Sign in</button></div>
      {isFormOpen && <Form/>}
    </div>
  )
}

export default Navbar
