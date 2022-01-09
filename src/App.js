import {Route, Switch} from 'react-router-dom'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'
import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
    </Switch>
  </div>
)

export default App
