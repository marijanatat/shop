import React,{Component }from 'react';
import {Switch,Route} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/webShop/shop.component'

import Header from './components/header/header.component.jsx'
import SignPage from './pages/signpage/signPage.component'

function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
     {/* <Homepage></Homepage> */}
     <Route path='/shop' component={Shop}/>
     <Route path='/signin' component={SignPage}/>
      </Switch>
      
    </div>
  )
}
  
export default App;
