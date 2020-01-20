import React,{Component }from 'react';
import {Switch,Route} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/webShop/shop.component'

import Header from './components/header/header.component.jsx'

function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
     {/* <Homepage></Homepage> */}
     <Route path='/shop' component={Shop}/>
      </Switch>
      
    </div>
  )
}
  
export default App;
