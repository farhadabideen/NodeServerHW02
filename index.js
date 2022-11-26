var mongoClient = require('mongodb').MongoClient;



var config = {useUnifiedTopology: true};
var clusterURL = "mongodb+srv://FAPracticeDB:FAPracticeDB@cluster0.eys8t82.mongodb.net/?retryWrites=true&w=majority";
mongoClient.connect(clusterURL,config,function(error,myMongoClient){
    if(error){
        console.log("Mongo DB not connected");
    }else{
        //console.log("Mongo DB connected");
        //insertData(myMongoClient);
        //insertManyData(myMongoClient);
        //deleteData(myMongoClient);
        //findOne(myMongoClient);
        //findAll(myMongoClient);
        //findDataByProjection(myMongoClient);
        //findDataByQuery(myMongoClient);
        //findDataBySort(myMongoClient);
        //updateOneData(myMongoClient);
        //insertManyData(myMongoClient);
        updateManyData(myMongoClient);
    }
});

function insertData(myMongoClient){
   var dbName = myMongoClient.db("FAPracticeDB");
   var tblUser = dbName.collection('tblUser');
   var userData = {name:"Farhad",Roll:"2", city:"Chittagong"};
   tblUser.insertOne(userData,function(error){
    if(error){
        console.log("Data insert failed");
    }else{
        console.log("Data insert successfully");        
    }
   });
};

const insertManyData=async(myMongoClient)=>{
    try {
        var dbName = myMongoClient.db("FAPracticeDB");
        var tblUser = dbName.collection('tblUser');
        var userData =[
            {name:"Farhad",Roll:"3", city:"Chittagong"},
            {name:"Abideen",Roll:"4", city:"Chittagong"},
            {name:"Fahad",Roll:"5", city:"Chittagong"}
        ];    
       const result = await tblUser.insertMany(userData);
       console.log("Number of documents inserted: " + result.insertedCount);
    }catch (error) {
        console.log("Multiple Data insert failed");
    }finally{
        await myMongoClient.close();
    }   
 };


function deleteData(myMongoClient){
   var dbName = myMongoClient.db("FAPracticeDB");
   var tblUser = dbName.collection('tblUser');
   var delItem = {Roll:"09"};
   tblUser.deleteOne(delItem,function(error){
    if(error){
        console.log("Data Delete failed");
    }else{
        console.log("Data Delete successfully");        
    }
   });
};

function findOne(myMongoClient){
    var dbName = myMongoClient.db("FAPracticeDB");
    var tblUser = dbName.collection('tblUser');
    var findObj = {Roll: "2"};
    tblUser.findOne(findObj,function(error,result){
     if(error){
         console.log("Data get failed");
     }else{
         console.log(result);        
     }
    });
 };

 function findAll(myMongoClient){
    var dbName = myMongoClient.db("FAPracticeDB");
    var tblUser = dbName.collection('tblUser');
    tblUser.find().toArray(function(error,result){
     if(error){
         console.log("Data get all failed");
     }else{
         console.log(result);        
     }
    });
 };

 function findDataByProjection(myMongoClient){
    var dbName = myMongoClient.db("FAPracticeDB");
    var tblUser = dbName.collection('tblUser');

    var findObj = {};
    var projectItem ={projection:{city:"",name:""}};
    tblUser.find(findObj,projectItem).toArray(function(error,result){
     if(error){
         console.log("Data get Specific/Projection column failed");
     }else{
         console.log(result);        
     }
    });
 };

 function findDataByQuery(myMongoClient){
    var dbName = myMongoClient.db("FAPracticeDB");
    var tblUser = dbName.collection('tblUser');

    var query = {Roll:22};
    //var projectItem ={projection:{city:"",name:""}};
    tblUser.find(query).limit(5).toArray(function(error,result){
     if(error){
         console.log("Data get where roll 2 column failed");
     }else{
         console.log(result);        
     }
    });
 };

 function findDataBySort(myMongoClient){
    var dbName = myMongoClient.db("FAPracticeDB");
    var tblUser = dbName.collection('tblUser');

    var sortType = {Roll:-1}; //1 Asc, -1 Desc
    //var projectItem ={projection:{city:"",name:""}};
    tblUser.find().sort(sortType).toArray(function(error,result){
     if(error){
         console.log("Data get where roll 2 column failed");
     }else{
         console.log(result);        
     }
    });
 };

 function updateOneData(myMongoClient){
    var dbName = myMongoClient.db("FAPracticeDB");
    var tblUser = dbName.collection('tblUser');

    var query = {Roll:92}; //1 Asc, -1 Desc
    var updateSet = {$set:{ Roll:90 } }; //1 Asc, -1 Desc
    //var projectItem ={projection:{city:"",name:""}};
    tblUser.updateOne(query,updateSet,function(error,result){
     if(error){
         console.log("Data update failed");
     }else{
         console.log(result);        
     }
    });
 };

 const updateManyData=async(myMongoClient)=>{
    try {
        var dbName = myMongoClient.db("FAPracticeDB");
        var tblUser = dbName.collection('tblUser');

        var query = {}; 
        var updateSet = {$set:{ city:"CTG"} }; 
 
       const result = await tblUser.updateMany(query,updateSet);
       console.log("Number of documents updated: " + result.modifiedCount);
    }catch (error) {
        console.log("Multiple Data update failed");
    }finally{
        await myMongoClient.close();
    }   
 };

 