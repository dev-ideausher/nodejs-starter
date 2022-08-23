
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        default:"Unknown"
    },
    phone:{
        type:String,
        default:"+910000000000"
    },
    email:{
        type:String,
        default:"testuser@gmail.com"
    },
    image:{
        type:String,
        default:"https://i.pinimg.com/originals/6e/70/97/6e7097e29b6bc038069e5b375069c1c7.jpg"
    },
    userType:{
        type:String,
        enum:["user","owner","admin"],
        default:"user"
    },
    dob:{
        type:Date
    },
    firebaseUid:{
        type:String,
        required:true,
        unique:true
    },
    firebaseSignInProvider:{
        type:String,
        required:true
    },
    invitedBy:{
        type:String
    },
    referralCode:{
        type:String
    },
    userIdCardImage:{
        type:String,
    },
    userIdCardNumber:{
        type:String
    },
    active:{      // for user block functionality. if (active=false) then user is blocked.
        type:Boolean,
        default:true
    },
    isDeleted:{  // to soft delete user. if(isDeleted = true), then user is deleted.
        type:Boolean,
        default:false
    }
},
    {timestamps:true}
);

userSchema.pre(/^find/,function(next){
    this.find({isDeleted:{$ne:true}})
    next();
});

module.exports = mongoose.model("User",userSchema,"User");
