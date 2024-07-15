const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

//Import the 'db' object from FirebaseAdmin file.
//The 'db' object will be used for connection with the firestore database.
const { db } = require('../FirebaseAdmin');

//API for registering pet
router.post('/InsertPetDetails', async (req, res) => {
  const { email, firstName, lastName, petname, contact, address, alternateContact, tcAccepted, userId} = req.body;

  console.log(req.body)
  try {
    

    //Insert the owner and pet details into the 'perDetails' collection in the database in firestore
    await db.collection('petDetails').doc().set({      
      email: email,
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      petName: petname,
      address: address,
      alternateContact: alternateContact,
      TCAcceptedYN: tcAccepted,
      userId: userId,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).json({ message: 'Pet Registered Successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});





//Exports the router which contains the Post APIs for Signup and Signin
//This is then added to the App in 'Index.js'
module.exports = router;
