import React from 'react';
import {connect} from 'react-redux'
import './checkout-item.styles.scss';
import {removeItem} from '../../redux/cart/cart.actions'
import { addItem, removeItemFromCart } from '../../redux/cart/cart.actions';
//import {
    //clearItemFromCart,
   // addItem,
    //removeItem
  //} from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem,removeItem, addItem,removeItemFromCart }) => {
    const{name, imageUrl, price, quantity}=cartItem;
    const sum=quantity * price;
    return(
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
  
    <span className='quantity'>
        <div className='arrow' onClick={()=>removeItemFromCart(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>

<span className='price'>{sum}€</span>
    <div className='remove-button' onClick={()=>removeItem(cartItem)}>&#10005;</div>
  </div>
);
    }

const mapDispatchToProps=dispatch=>({
 removeItem:item=>dispatch(removeItem(item)),
 addItem:item=>dispatch(addItem(item)),
 removeItemFromCart:item=>dispatch(removeItemFromCart(item))
});
export default  connect(null,mapDispatchToProps)(CheckoutItem);