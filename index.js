const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://dev:<password>!@cluster0-mpzfl.mongodb.net/school?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });

  const Student = mongoose.model(
    'student',
    new mongoose.Schema({
    first_name :String,
    last_name :String ,
    average_grade :String,
    courses :String,
    email :String,
    birthday: Date,
    _created : Date, 
  
    },
    {
      collection: 'students'
  })
  );
  
  var k = new Student({
    first_name : "Stefan", 
    last_name : 'Stefanovski', 
    average_grade : "8", 
    courses : ["math", "science"], 
    email : "stefan@stefanovski.mk", 
    birthday: new Date('1989-12-04T21:45:00.333Z'),
  _created : new Date(),
  });
  
  k.save(err =>{
    if(err){
      console.log('could not save student');
      return;
    }
    console.log('save succesfull');
  })
  
//   Klient.find({"lokacija.grad":"Kumanovo","zanrovi":"akcija"}, (err, data)=> {
//       if(err){
//         console.log('could not read data')
//         return;
//       }
//   // console.log(data);
//   data.forEach((k, i)=> {
//       console.log(k.ime, '', k.prezime, '', k.email);
//   })
//   });


/*
students
-first_name
-last_name
-average_grade
-courses [math,science]
-email
-birthday Date
*/