const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KuyQTSHLgZprvKzcZL4qsVGuuUQGx3Wb19QHtfziXgrzOaZC45IWeBAeRcnImFxPBqcoDquKZpu6Pw5pR320lYZ0037fHgYv3');


//API functions
// const app = express();

//- Firebase Configuration
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

///  MiddleWare
// app.use(cors({origin:true}));
// app.use(express.json());

//Firebase Functions
// Take the text parameter passed to this HTTP endpoint and insert it into 
// Firestore under the path /messages/:documentId/original
exports.hello = functions.https.onRequest((req, res) => {
   // Grab the text parameter.
   
   // Send back a message that we've successfully written the message
   res.status(200).send('Hello World!');
 });
exports.payment = functions.https.onRequest(async (req,res)=>{
   switch(req.method){
      case 'GET':
         res.send('This is Payment Api');
         break;
      case 'POST':
         const total = req.query.total;
         var paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'inr'
         });
         res.status(201).send({
            'clientSecret': paymentIntent
         });
         break;
      default:
         res.send('Site is Under Maintainance');   
   }
});


//- ApI Routers
// app.get('/',(req,res)=> res.status(200).send('Hello, world!'));
// app.post('/payment/create',async (req,res)=>{ 
//    const total = req.query.total;
//    // console.log('Payment created', total);

//    var paymentIntent = await stripe.paymentIntents.create({
//       amount: total,
//       currency: 'inr'
//    });

//    res.status(201).send({
//       'clientSecret': paymentIntent
//    })
// });
{/*start:  "firebase functions:shell", */}

// Listen Command
// exports.api = functions.https.onRequest(app)