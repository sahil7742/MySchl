
import { images } from "@/next.config";
import mongoose from "mongoose";

//schema creation

const RcardSchema = new mongoose.Schema ({
    name:{type:String, required:true},
    father:{type:String, required:true},
    standard:{type:String, required:true},
    contact:{type:String, required:true},
    maths:{type:String, required:true},
    sci:{type:String, required:true},
    sst:{type:String, required:true},
    hindi:{type:String, required:true},
    eng:{type:String, required:true},
   
})
//creating model and exporting it
export default mongoose.models.Rcard || mongoose.model("Rcard", RcardSchema)