import { Checkout } from 'checkout-sdk-node';

 // Initialize Checkout.com SDK
 const cko = new Checkout('your_secret_key', {
   debug: true,
 });
 
 function PaymentForm() {
   // Your form implementation here...
 }
 
 export default PaymentForm;