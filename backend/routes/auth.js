const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

//Import the 'db' object from FirebaseAdmin file.
//The 'db' object will be used for connection with the firestore database.
const { db } = require('../FirebaseAdmin');

//API for 'signup'
router.post('/signup', async (req, res) => {
  const { email, password, firstName, lastName, dob, gender, contact } = req.body;

  try {
    //Create a new user using Firebase authentication
    const user = await admin.auth().createUser({
      email: email,
      password: password
    });

    //Insert the user details into the 'users' collection in the database in firestore
    await db.collection('users').doc(user.uid).set({
      uid: user.uid,
      email: email,
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      gender: gender,
      contact: contact,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



router.get('/getUserData/:ID', async (req, res) => {
  const uid = req.params.ID;
  try {
    const userDoc = await db.collection('users').doc(uid).get();
    if (userDoc.exists) {
      res.json(userDoc.data());
    } else {
      res.status(404).json({ error: 'User details not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


//Exports the router which contains the Post APIs for Signup and Signin
//This is then added to the App in 'Index.js'
module.exports = router;
