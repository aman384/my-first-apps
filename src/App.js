import React from 'react';
import './App.css';
import Dashboard from './component/dashboard'
import Profile from './component/profile'
import Page3 from './component/page3'


// import './assets/js/bootstrap.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  // var myStyle = {
  //   fontSize: 100,
  //   color: '#FF0000'
  // }

  return (
    <BrowserRouter>
      {/* <div> */}
        {/* <Menu /> */}
        <Switch>

          {/* red-block */}
          <Route exact path="/" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/page3" component={Page3} />



        </Switch>
      {/* </div> */}
    </BrowserRouter>

  );
}

export default App;

