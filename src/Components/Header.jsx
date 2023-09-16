import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import './header.css'

export function Header() {
  return (
    <header>
      <div className='container'>
        <div>
          <img className='img' src='custom-logo.png' alt='logo'/>
          <NavLink to='/' end>
            
          </NavLink>
        </div>
        <Navbar/>
      </div>
    </header>
  )
}