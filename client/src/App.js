import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import Detail from './components/detail/Detail';
import ActivityCreated from './components/activityCreate/ActivityCreate';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component={LandingPage}/>
        <Route path= '/home' component={Home}/>
        <Route path= '/activity' component={ActivityCreated}/>
        <Route path= '/details/:id' component={Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
