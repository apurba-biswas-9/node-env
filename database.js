const firebase = require("firebase");
const dotenv = require('dotenv');
dotenv.config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PPROJECTID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.SENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MESURE
  };

  console.log(`Your port is ${firebaseConfig.appId}`); // 8626
  

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const dataToSave = {
    comments: "Comments1",
    email: "email1",
    name : "name1",
    phoneno : "phone1"

    // Add more key-value pairs as needed
  };


  
  const collectionRef = firestore.collection("ksolutions-contact-as");

  collectionRef.add(dataToSave)
  .then((docRef) => {
    console.log("Data saved successfully! Document ID:", docRef.id);
  })
  .catch((error) => {
    console.error("Error saving data:", error);
  })

  