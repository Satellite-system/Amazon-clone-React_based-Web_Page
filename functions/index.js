const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KuyQTSHLgZprvKzcZL4qsVGuuUQGx3Wb19QHtfziXgrzOaZC45IWeBAeRcnImFxPBqcoDquKZpu6Pw5pR320lYZ0037fHgYv3');


//API functions
const app = express();

//- App Configuration


///  MiddleWare
app.use(cors({origin:true}));
app.use(express.json());

//- ApI Routers
app.get('/',(req,res)=> res.status(200).send('Hello, world!'));
app.post('/payment/create',async (req,res)=>{ 
   const total = req.query.total;
   // console.log('Payment created', total);

   var paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'inr'
   });

   res.status(201).send({
      'clientSecret': paymentIntent
   })
});


// Listen Command
exports.api = functions.https.onRequest(app)