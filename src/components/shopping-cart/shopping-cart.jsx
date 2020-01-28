import React from 'react'
import './shopping-cart.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.actions'

const ShoppingCart=({toggleCart})=>(
<div className='shopping-cart' onClick={toggleCart}>
    <ShoppingIcon className='shopping-icon'>
    </ShoppingIcon>
<span className='item-count'>0

</span>
</div>
)

const mapDispatchToProps=dispatch=>({
    toggleCart: ()=>dispatch(toggleCart())
 });
export default connect(null,mapDispatchToProps)(ShoppingCart);