import React from 'react';
import NavBar from './Components/NavBar';
import './index.css'
import Home from './Components/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import About from './Components/About';
import News from './Components/aboutMore/News';
import Blogs from './Components/aboutMore/Blog';
import Contact from './Components/Contact';
function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='/about/News' element={<News/>} />
          <Route path='/about/Blogs' element={<Blogs/>} />
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      </BrowserRouter>
      
   
  );
}

export default App;
