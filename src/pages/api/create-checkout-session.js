import { Checkout } from 'checkout-sdk-node';
import dotenv from 'dotenv';

// Load environment variables from .env.local file
dotenv.config();

// Initialize SDK with secret key from env variable
const cko = new Checkout(process.env.CHECKOUT_SECRET_KEY);


export default async function handler(req, res) {
    try {
      // Get necessary data from request body or query parameters
     
      
       const session = await cko.sessions.create({
         amount:"350",
         currency:"USD",
         success_url:`${req.headers.origin}/success=true`,
         cancel_url:`${req.headers.origin}/canceled=true`,


       });
  
        res.status(200).json({ sessionId : session.id });
          
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while creating a checkout session.' });
    }
  }