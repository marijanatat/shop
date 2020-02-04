import React,{Component }from 'react';
import {Switch,Route, Redirect} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/webShop/shop.component'
import Header from './components/header/header.component.jsx'
import SignPage from './pages/signpage/signPage.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions';
import SignIn from './components/sign-in/sign-in.component';
import CheckoutPage from './pages/checkout/checkout.component'


class App extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      currentUser:null
  //   }
  // }
  unsubscribeFromAuth=null


  componentDidMount() {
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // });
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
         
        });
      }
      setCurrentUser(userAuth);

     // this.setState({ currentUser: userAuth });
    });
  }
   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }

  render(){
  return (
    <div >
      {/* <Header currentUser={this.state.currentUser}/> */}
      <Header></Header>
      <Switch>
      <Route exact path='/' component={Homepage}/>
     {/* <Homepage></Homepage> */}
     <Route path='/shop' component={Shop}/>
     <Route path='/checkout' component={CheckoutPage}/>
     <Route exact path='/signin'
    render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignPage></SignPage>)}/>
      </Switch>
      
    </div>
  )
}
}
 const mapStateToProps=({user})=>({
   currentUser:user.currentUser
 })
const mapDispatchToProps=dispatch=>({
   setCurrentUser: user=>dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps) (App);
