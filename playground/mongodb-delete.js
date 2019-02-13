const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server ');

    // db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result)=>{
    //   console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Had Lunch'}).then((result)=>{
    //   console.log(result);
    // })

    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    })

    //db.close();
});
