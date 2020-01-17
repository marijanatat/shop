import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'

const ClothingPage=()=>(
  <div>
    <h1>Clothing</h1>
  </div>

);


function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={Homepage}/>
     {/* <Homepage></Homepage> */}
     <Route path='/clothing' component={ClothingPage}/>
      </Switch>
      
    </div>
  )
}
  
export default App;
