const admin = require('firebase-admin')
admin.initializeApp({
  credential: admin.credential.applicationDefault()
})
const db = admin.firestore();

// db.collection("cities").doc("LA").set({
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// })
// .then(function() {
//   console.log("Document successfully written!");
// })
// .catch(function(error) {
//   console.error("Error writing document: ", error);
// });
