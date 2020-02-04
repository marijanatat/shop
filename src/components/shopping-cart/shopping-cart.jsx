import React from 'react'
import './shopping-cart.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.actions'

const ShoppingCart=({toggleCart,itemCount})=>(
<div className='shopping-cart' onClick={toggleCart}>
    <ShoppingIcon className='shopping-icon'>
    </ShoppingIcon>
<span className='item-count'>{itemCount}

</span>
</div>
)

const mapDispatchToProps=dispatch=>({
    toggleCart: ()=>dispatch(toggleCart())
 });

 const MapStateToProps=({cart:{cartItems}})=>({
  itemCount:cartItems.reduce((sumQuantity,cartItem)=>sumQuantity+cartItem.quantity,0)
  
    });
export default connect(MapStateToProps,
    mapDispatchToProps)(ShoppingCart);