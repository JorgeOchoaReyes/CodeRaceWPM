import './App.css';
import React from 'react'; 
import CodeRace from './Pages/CodingRace/CodingRace';
import Header from './RouterComps/NavBar';
import {Route, Redirect, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>

          <Route exact path='/welcome'>
            <CodeRace />
          </Route>

        </Switch>
      </main>
    </div>
  );
}

export default App;
