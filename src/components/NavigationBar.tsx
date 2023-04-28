import { Link } from "react-router-dom";

export default function NavigationBar(): JSX.Element {
  return (
    <div>
      <ul>
        <li><Link to='/meals'>Meals</Link></li>
        <li>Drinks</li>
        <li>Favorites</li>
        <li>Random Meal</li>
        <li>Random Drinks</li>
      </ul>
    </div>
  )
}
