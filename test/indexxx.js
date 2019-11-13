const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://dev:DEV123!@cluster0-mpzfl.mongodb.net/school?retryWrites=true&w=majority", {
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
    first_name: String,
    last_name: String ,
    average_grade: String,
    courses: [String],
    email: String,
    birthday: Date,
    _created : Date 
  
    },
    {
      collection: 'students'
  })
  );
  
  var s = new Student({
    first_name : "Nikola", 
    last_name : "NIkolovski", 
    average_grade : "9", 
    courses : ["math", "science"], 
    email : "nikola@nikolovski.mk", 
    birthday: new Date("1999-12-04T21:45:00Z"),
  _created : new Date(),
  
  });
  
  s.save(err =>{
    if(err){
      console.log('could not save student');
      return;
    }
    console.log('save succesfull');
  });
  
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
