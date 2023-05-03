import NavigationBar from './NavigationBar';
import '../styles/header.css';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <div className='main-title'>
        <Link to='/'>Recipes App</Link>
      </div>
      <div className='nav-bar'>
        <NavigationBar />
      </div>
      <div className='search-bar'>
        Search
      </div>
    </header>
  )
}
