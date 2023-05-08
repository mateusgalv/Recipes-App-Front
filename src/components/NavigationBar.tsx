import { Link } from "react-router-dom";
import '../styles/navBar.css';

export default function NavigationBar(): JSX.Element {
  return (
    <div>
      <ul>
        <li>
          <Link to='/meals'>
            <p className='nav-bar-text'>Meals</p>
          </Link></li>
        <li>
          <Link to='/drinks'>
            <p className='nav-bar-text'>Drinks</p>
          </Link>
        </li>
        <li>
          <p className='nav-bar-text '>Favorites</p>
        </li>
      </ul>
    </div>
  )
}
