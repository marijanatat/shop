import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton =({price})=>{
  const priceForStripe=price*100;
  const publishableKey='pk_test_TaormoTjvBeG878cSgRo3Dqm00X5lEl0CG';
 
  const onToken=token=>
  {
      console.log(token);
      alert('Payment Succsessful ')
  }
 
  return(
      <StripeCheckout
      currency="EUR"
      label='Pay Now'
      name='Baby Shop'
      billingAddress
      shippingAddress
      image='https://cdn11.bigcommerce.com/s-jd2vdz6ehx/images/stencil/1280x1280/products/2147/8512/elephants-coupon__59336.1580224013.jpg?c=2&imbypass=on'
      description={`Your total is € ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}

      />
  )
}
export default StripeButton;