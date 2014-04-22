
//Setup Stripe
var Stripe = require('stripe');
Stripe.initialize('sk_test_uhfZ9lhMa1Dxwvr2VFn0rdmt');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {


	Stripe.Charges.create({
	  amount: 100 * 10, // $10 expressed in cents
	  currency: "usd",
	  card: request.params['token'] // the token id should be sent from the client
	},{
	  success: function(httpResponse) {
	    response.success("Purchase made!");
	  },
	  error: function(httpResponse) {
	    response.error("Uh oh, something went wrong");
	  }
	});

  // response.success("One Warm Coat team is the coolest");
});
