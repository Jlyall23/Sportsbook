
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import NBA from './pages/NBA';
import NFL from './pages/NFL';
import MLB from './pages/MLB';
import { BrowserRouter as Router,Route,Routes,Link,}from 'react-router-dom'



function App() {
  fetch('https://sports-live-scores.p.rapidapi.com/baseball/live')
  .then(res=> res.json())
  .then(data => console.log(data))
  return (
    <Router>
        <nav id='NAV'>
          <Link className='navLinks' to='/'> Home</Link>
          <Link className='navLinks' to='/about'> About</Link>
          <Link className='navLinks' to='/NFL'> NFL</Link>
          <Link className='navLinks'to='/MLB'> MLB</Link>
          <Link className='navLinks' to='/NBA'> NBA</Link>

        </nav>
        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/about' element={<About />} />
            <Route path='/NFL' element={<NFL />} />
            <Route path='/MLB' element={<MLB />} />
            <Route path='/NBA' element={<NBA />} />
           

        </Routes>
        <div id='Footer'>
        Footer
        </div> 

    </Router>
  );
}

export default App;
