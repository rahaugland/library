
import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SemesterCard from './components/SemesterCard';
import Home from "./Home"

class App extends Component {
  render(){
    return(
    <Router>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/semester' component={SemesterCard} />
          </Switch>
    </Router>
    )
  }
}

export default App;
