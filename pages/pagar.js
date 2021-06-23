import React from 'react';
import Script from 'next/script';

var PagarMeCheckou;

class Pagar extends React.Component {

    openCheckout() {
        console.log(window.PagarMeCheckout)
      let checkout = new PagarMeCheckout.Checkout({
        encryption_key: "ek_test_QL5ckR2Gj8LgmmO3G1MnOAph8UrpAD",
        success: function(data) {
          alert(JSON.stringify(data));
        },
        error: function(err) {
          alert(JSON.stringify(err));
        },
        close: function() { 
          alert("The modal has been closed.");
        }
      }); 
  
      checkout.open({
        amount: 8000,
        buttonText: "Pagar",
        customerData: "false",
        createToken: "false",
        paymentMethods: "credit_card",
        maxInstallments: "8",
        freeInstallments: "1" ,
        interestRate: "2.0"
      });
    }
 
    render() { 
        return(
            <>
                <Script src="https://assets.pagar.me/checkout/checkout.js" strategy="beforeInteractive"  onLoad={() => {
                        this.setState({ PagarMeCheckout: window.PagarMeCheckout })
                }} />   
                <button onClick={this.openCheckout}>Abrir o Checkout</button>
            </>
        )
        
    }
  }

  export default Pagar

  
  
