// module.exports = mongoose => {
//     const Tutorial = mongoose.model(
//       "tutorial",
//       mongoose.Schema(
//         {
//           title: String,
//           description: String,
//           published: Boolean
//         },
//         { timestamps: true }
//       )
//     );
  
//     return Tutorial;
//   };
  const mongoose=require('mongoose');

var Tutorial=mongoose.model('Tutorial',{

    title:{type:String},
    description:{type:String}
   

});
module.exports={Tutorial};