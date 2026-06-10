const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: {
        type: String,
        trim: true
    },

     lastName: {
        type: String,
        trim: true
    },

     DOB: {
        type: Date,
    },

     email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, "Please enter a valid email address"]
    },

      password: {
        type: String,
        required: true,
        minLength: 6,
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"]
    },
  },
   { timestamps: true }
)

userSchema.pre("save", async function() {
    if(!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("User", userSchema);