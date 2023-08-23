import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';





export default function PaymentForm() {



    const handleButtonClick = (value) => {
      
      localStorage.setItem('amount',value);
      if(value=="350"){
        localStorage.setItem('plan',"Standard");
      }else{
        localStorage.setItem('plan',"Pro");
      }
    };
    
    


  return (
    
    <>
      <form action="/api/create-payment-session" method="POST">
        <section>
          <div className="bigdata-services-area ptb-80 bg-eef6fd">
            <div className="container">
              <div className="section-title">
                <h2>Our special packages</h2>
                <div className="bar"></div>
                <p>
                  You can choose the package that suits you and enjoy the experience
                  with us
                </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-table">
                    <div className="pricing-header">
                      <h3>6FE Standard</h3>
                    </div>
                    <div className="price">
                      <span>
                        <sup>$</sup>350.00{' '}
                      </span>
                    </div>
                    <div className="pricing-features">
                      <ul></ul>
                    </div>
                    <div className="pricing-footer">
                      <button onClick={() => handleButtonClick("350")} className="btn btn-primary" type="submit" name="amount" value="350" role="link" >Standard </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-table">
                    <div className="pricing-header">
                      <h3>6FE Pro</h3>
                    </div>
                    <div className="price">
                      <span>
                        <sup>$</sup>600.00{' '}
                      </span>
                    </div>
                    <div className="pricing-features">
                      <ul></ul>
                    </div>
                    <div className="pricing-footer">
                      <button onClick={() => handleButtonClick("600")} className="btn btn-primary" type="submit" name="amount"value ="600" role="link" >Pro</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>  
    </>
  );
}
