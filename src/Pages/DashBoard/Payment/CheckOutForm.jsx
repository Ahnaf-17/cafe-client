import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = () => {
    const {user} = useAuth()
    const [error,setError] = useState()
    const [ClientSecret,setClientSecret] = useState('')
    const [transactionId,setTransactionId] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const [cart] = useCart()
    const totalPrice = cart.reduce((total,item) => total+item.price,0)

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price: totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure, totalPrice])


    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)
        if(card == null){
            return;
        }
        const {error,paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error:',error);
            setError(error.message)
        }
        else{
            console.log('Payment method:',paymentMethod);
            setError('')
        }

        // confirm payment 
        const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(ClientSecret,{
            payment_method: {
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error');
        }
        else{
            console.log('payment intent',paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id:',paymentIntent.id);
                setTransactionId(paymentIntent.id)
            }
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-neutral btn-sm my-2" type="submit" disabled={!stripe || !ClientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && <p className="text-green-500">Payment successful and transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;