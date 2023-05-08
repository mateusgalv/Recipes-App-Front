import NavigationBar from './NavigationBar';
import '../styles/header.css';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='header-element'>
        <Link to='/'>
          <p className='nav-bar-text'>Recipes App</p>
        </Link>
      </div>
      <div className='header-element nav-bar'>
        <NavigationBar />
      </div>
      <div className='header-element'>
        <p className='nav-bar-text'>Search</p>
      </div>
    </header>
  )
}
