import './styles/app.sass'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import NavContainer from './components/NavContainer'
import FooterContainer from './components/FooterContainer'
import Trophies from './pages/Trophies'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trophies' element={<Trophies />} />
        </Routes>
        <FooterContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
