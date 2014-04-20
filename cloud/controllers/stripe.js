
//Setup Stripe
var Stripe = require('stripe');
Stripe.initialize('sk_test_193nrUQjYb2foSDVGqpMIA11');











// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("One Warm Coat team is the coolest");
});
