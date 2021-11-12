import React from 'react';
import {Page} from './Page'
import {QRCodeData} from './QRCodeData'
import OutsideAlerter from './Details'
import './style.css'
import {Route,Switch, BrowserRouter} from 'react-router-dom';

function App() { 
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Page}></Route>
            <Route exact path='/qrdata' component={QRCodeData}></Route>            
          </Switch>
        </BrowserRouter> 
    </div>
  );
}

export default App;
