import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Appbar from './components/Appbar'
import Footer from './components/Footer'
import './App.css';


const App = () => {

  return (
    <Router>
        <Appbar />
        <Switch>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
        <Footer />
    </Router>
  )
}

export default App
