import { createPaymentSession } from 'checkout-sdk-node';

export default async function handler(req, res) {
 /* const amount = req.body.amount; */ // Get payment amount from request body

    const amount ="350";
  
  try {
    const session = await createPaymentSession({
      secretKey: process.env.CHECKOUT_SECRET_KEY,
      publicKey: process.env.CHECKOUT_PUBLIC_KEY,
      amount,
      currency: 'USD',
      successUrl: '/success', // Replace with appropriate URLs for success/failure pages
      failureUrl: '/failure',
    });
    
    res.status(200).json({ sessionId : session.id });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating a payment session.' });
  }
}