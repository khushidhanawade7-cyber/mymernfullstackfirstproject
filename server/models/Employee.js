import mongoose from "mongoose";
      import bcrypt from "bcryptjs";
      
      // Define schema (structure of user collection in DB)
      const userSchema = new mongoose.Schema({
        ename: {
          type: String,
          required: true, // must provide
        },
        email: {
          type: String,
          required: true,
          unique: true, // no duplicate emails
        },
        contact: {
          type: String,
          required: true,
        },
        age: {
          type: String,
          required: true,
        },
        gender:{
          type: String,
          default: "user", // default role is user 
          enum: ["male", "female"] ,// can be either male or female
        },
        salary:{
            type: Number,
            required: true,
        },
        qualificatin:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        picture:{
            type: String,
            required: true,
        },
      });
      
      // Before saving → hash password
      userSchema.pre("save", async function (next) {
        if (!this.isModified("password")) return next(); // only hash if password is new
        this.password = await bcrypt.hash(this.password, 10);
        next();
      });
      
      const User = mongoose.model("User", userSchema);
      export default User;