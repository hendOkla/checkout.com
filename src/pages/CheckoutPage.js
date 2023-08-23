import { useState } from 'react';
import { createPayment } from '@/utils/payment';

export default function CheckoutPage() {
    const [paymentStatus, setPaymentStatus] = useState('');

    const handlePayment = async () => {
        try {
            // Call the createPayment function with amount and currency
            const payment = await createPayment(1000, 'USD');
            
            console.log('Payment created:', payment);

            // Handle success or failure based on the response
            if (payment.status === 'Authorized') {
                setPaymentStatus('Success');
                // Redirect or show success message as needed
            } else {
                setPaymentStatus('Failure');
                // Show error message or retry option as needed
            }
        } catch (error) {
          console.error('Error creating payment:', error);
          setPaymentStatus('Failure');
          // Show error message or retry option as needed  
        }
    };

    return (
        <div>
           <h1>Checkout Page</h1>
           {/* Additional checkout page content */}
           <button onClick={handlePayment}>Make Payment</button>
           {paymentStatus && <p>{paymentStatus}</p>}
       </div>
   );
}