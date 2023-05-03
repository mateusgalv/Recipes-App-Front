import { Link } from "react-router-dom";
import '../styles/navBar.css';

export default function NavigationBar(): JSX.Element {
  return (
    <div>
      <ul>
        <li><Link to='/meals'>Meals</Link></li>
        <li><Link to='/drinks'>Drinks</Link></li>
        <li>Favorites</li>
      </ul>
    </div>
  )
}
