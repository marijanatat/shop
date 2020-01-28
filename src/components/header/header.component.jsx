import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
//import { ReactComponent as Logo } from './logo.svg';
import CartIcon from '../shopping-cart/shopping-cart'
import {ReactComponent as Logo } from '../../assets/baby.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {/* <Link className='option' to='/signin'>
         SIGN IN
        </Link> */}
        {
        currentUser ?
          <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
        
      </div>
      {
        hidden? null:
      <CartDropdown/>
      }
    </div>
  );
  //  const MapStateToProps=state=>({
  //  currentUser:state.user.currentUser
  //  })

//destructuring
  const MapStateToProps=({user:{currentUser},cart:{hidden}})=>({
     currentUser,
    hidden
     })
  export default connect(MapStateToProps)(Header);