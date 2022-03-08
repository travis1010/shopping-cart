import '../styles/Nav.css'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='Nav'>
      <nav>
        <Link to='/' className='link'>Home</Link>
        <Link to='/shop' className='link'>Shop</Link>
        <Link to='/about' className='link'>About</Link>
      </nav>
      <div>
      </div>
    </div>
  )
}

export default Nav;