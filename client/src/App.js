import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Appbar from './components/Appbar'
const App = () => {
  return (
    <Router>
      <div>
        <Appbar />
        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
