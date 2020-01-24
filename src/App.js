import React,{Component }from 'react';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/webShop/shop.component'
import Header from './components/header/header.component.jsx'
import SignPage from './pages/signpage/signPage.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser:null
    }
  }
  unsubscribeFromAuth=null


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

         
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }

  render(){
  return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
     {/* <Homepage></Homepage> */}
     <Route path='/shop' component={Shop}/>
     <Route path='/signin' component={SignPage}/>
      </Switch>
      
    </div>
  )
}
}
export default App;
