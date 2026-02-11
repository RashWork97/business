import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import About from './About.jsx'
import Index from './Index.jsx'
import { HashLink as Link } from 'react-router-hash-link'

function App() {

  return (
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about#about-mission" smooth>About</Link>
    </nav>      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
