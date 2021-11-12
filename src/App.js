import React from 'react';
import {Page} from './Page'
import {QRCodeData} from './QRCodeData'
import OutsideAlerter from './Details'
import './style.css'
import {Route,Switch, HashRouter as Router} from 'react-router-dom';

function App() { 
  return (
    <div className="container" style={{borderRadius:15}}>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
            <i class="fa fa-qrcode" aria-hidden="true"></i> GENERATE QR CODE</a>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Contact Us</a></li>
            
          </ul>
        </div>
      </nav>
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
