var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://root:helloworld@cluster0-xcod1.mongodb.net/test";
MongoClient.connect(uri, function(err, client) {
   const db = client.db("monish");
   // perform actions on the collection object
   db.collection("users").insert({"name": "rishi narwani"}, (err, res) => {
       if (err) console.log(err);
       console.log(res, "1 inserted");
   });

   db.collection("users").find().toArray((err, docs) => {
       console.log(docs);
   });
   client.close();
});