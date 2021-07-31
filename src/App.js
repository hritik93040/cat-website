import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Gallery from './Gallery';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
        <Switch>
        
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/gallery" component={Gallery} />        
          <Route exact path="*" component={Home} />
        </Switch>
        </div>

      </Router>
    
    </>
  );
}

export default App;
