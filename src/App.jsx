import FooterContainer from './components/FooterContainer'
import MainContainer from './components/MainContainer'
import NavContainer from './components/NavContainer'
import TitlesContainer from './components/TitlesContainer'
import './styles/app.sass'

function App() {
  return (
    <div className="App">
      <NavContainer />
      <MainContainer />
      <TitlesContainer />
      <FooterContainer />
    </div>
  )
}

export default App
