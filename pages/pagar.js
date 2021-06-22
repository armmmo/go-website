import React from 'react'

export default function pagar() {
    openCheckout() {
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
        customerData: "true",
        createToken: "false",
        paymentMethods: "credit_card"
      });
    }
  
    render() {
      return <button onClick={this.openCheckout}>Abrir o Checkout</button>;
    }
}
  
