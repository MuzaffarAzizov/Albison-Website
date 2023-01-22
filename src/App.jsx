import Navbar from './components/navbar'
import Showcase from './components/Showcase'
import Qadam from './components/qadam'
import Portfolio from './components/portfolio'
import Ish from './components/ish'
import Program from './components/program'
import Footer from './components/footer'
import Social from './components/social'
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Showcase/>
      <Qadam/>
      <Portfolio/>
      <Ish/>
      <Program/>
      <Footer/>
      <Social/>
    </div>
  )
}
export default App
