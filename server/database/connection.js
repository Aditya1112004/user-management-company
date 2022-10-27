// const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config({path:'./config/config.env'})

// const connectDB =async()=>{
//     try{
//         const con = await mongoose.connect(process.env.MONGO_URI,{
//             useNewUrlParser :true,
//             useUnifiedTopology :true,
//             useFindAndModify:false,
//             useCreateIndex :true
//         })

//         console.log(`MongoDB connected: ${con.connection.host}`)
//     }catch(err){
//         console.log(err)
//         process.exit(1)
//     }
// }

//module.exports = connectDB

const mongoose = require("mongoose");

const connectDB = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://ADITECH:Aditya1112004@cluster0.0kleucg.mongodb.net/users?retryWrites=true&w=majority "
    );

    console.log(`MongoDB connected:`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
});
