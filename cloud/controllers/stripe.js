
//Setup Stripe
var Stripe = require('stripe');
Stripe.initialize('sk_test_uhfZ9lhMa1Dxwvr2VFn0rdmt');











// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("One Warm Coat team is the coolest");
});
