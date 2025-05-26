import { useState } from 'react' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';

// import About from './pages/About';
// import Courses from './pages/Courses';
// import Contact from './pages/Contact';
import './App.css'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Courses from './components/common/Courses';
import About from './components/common/About';
import Service from './components/common/Services';
import Login from './components/common/Login';
import Signup from './components/common/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Footer />} />
         <Route path="/service" element={<Service />} />
         <Route path='/Login' element={<Login />} />
         <Route path='/signup'element={<Signup  />} />
      
      </Routes>
    <Footer />
    </Router>
  )
}

export default App
