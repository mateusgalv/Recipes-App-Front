import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import './styles/app.css';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='app-container'>
    <div className='background'></div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='meals' element={ <Meals /> } />
        <Route path='drinks' element={ <Drinks /> } />
        <Route path='signin' element={ <SignIn /> } />
        <Route path='login' element={ <Home /> } />
        <Route path='/favorites' element={ <Home /> } />
        // My recipes
      </Routes>
    </div>
  )
}

export default App
