const request = require('request');

request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  let parsedData = JSON.parse(body);
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('parsed', parsedData["results"]["sunset"]);
  console.log(`The Sun will set ${parsedData["results"]["sunset"]} UTC`)
});