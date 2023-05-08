import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function Home() {
  return (
    <div className='home-page-container'>
      <section className='home-section'>
        <div>
          <h2>Cook your favorite <span className='orange'>Recipes!</span></h2>
        </div>
        <div>
          Easy recipes web-app.
        </div>
      </section>
      <section className='home-section'>
        <div className='btn-container'>
          <Link to='/signin'>
            <button>Sign In</button>
          </Link>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

//#FD9F26
