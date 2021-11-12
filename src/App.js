import React from 'react';
import {Page} from './Page'
import {QRCodeData} from './QRCodeData'
import OutsideAlerter from './Details'
import './style.css'
import {Route,Switch, HashRouter as Router} from 'react-router-dom';

function App() { 
  return (
    <div className="App">
     <Router>
       <Switch>
       <Route path='/' exact component={Page}/> 
        <Route path='/qrdata' exact component={QRCodeData}/>
       </Switch>
     </Router>
    </div>
  );
  
}

export default App;
