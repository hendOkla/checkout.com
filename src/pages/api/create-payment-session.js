import { createPaymentSession } from 'checkout-sdk-node';

export default async function handler(req, res) {
 /* const amount = req.body.amount; */ // Get payment amount from request body

    const amount ="350";
  
    const session = await createPaymentSession({
      secretKey: "sk_sbox_qb47zwgylpfrtqiifnnx5tpdhqe",
      publicKey: "pk_sbox_jznezw6fafiddjejooifh7ydyue",
      amount,
      currency: 'USD',
      successUrl: '/success', // Replace with appropriate URLs for success/failure pages
      failureUrl: '/failure',
    });
    
    res.status(200).json({ sessionId : 'session.id' });
}