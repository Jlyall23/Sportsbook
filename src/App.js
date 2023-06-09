
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import NBA from './pages/NBA/NBA-Standings';
import NFL from './pages/NFL/NFL';
import MLB from './pages/MLB/MLB';
import NbaStats from './pages/NBA/NBA-Stats-Page';
import { BrowserRouter as Router,Route,Routes,Link,}from 'react-router-dom'
import NFLStandings from './pages/NFL/NFL-Standings';
import MLBStandings from './pages/MLB/MLB-Standings';


function App() {

  return (
    <Router>
        <nav id='NAV'>
          <Link className='navLinks' to='/'> Home</Link>
          <Link className='navLinks' to='/about'> About</Link>
          <Link className='navLinks' to='/NFL'> NFL</Link>
          <Link className='navLinks' to='/NBA'> NBA</Link>
         
          
        </nav>
        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/about' element={<About />} />
            <Route path='/NFL' element={<NFL />} />
            <Route path='/NFLstandings' element={<NFLStandings />} />
            <Route path='/NBA' element={<NBA />} />
            
           

        </Routes>
        <div id='Footer'>
        Footer
        </div> 

    </Router>
  );
}

export default App;
