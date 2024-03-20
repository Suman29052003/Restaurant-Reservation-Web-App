import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName :{
        type : String,
        required : true,
        minLength : [3,"First name should be minimum 3 characters"],
        maxLength : [30,"First name should not be exceed 30 characters"]
    },
    lastName :{
        type : String,
        required : true,
        minLength : [3,"Last name should be minimum 3 characters"],
        maxLength : [30,"Last name should not be exceed 30 characters"]
    },
    email:{
        type : String,
        required : true,
        validate : [validator.isEmail,'Please provide a valid Email.'],
    },
    phone :{
        type : String,
        required : true,
        minLength: '10',
        maxLength : '10'
    },
    time :{
        type : String,
        required : true
    },
    date :{
        type : String,
        required : true
    }
},{timestamps : true});

export const reservation = mongoose.model("reservation",reservationSchema)