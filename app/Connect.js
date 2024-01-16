import mongoose from "mongoose";

const Connect = async()=>{
    try{
        return await mongoose.connect("mongodb://localhost:27017")
    }                                   /////////this exepction handling
    catch(e){
        throw new Error("connection lost")
    }
}
export default Connect;
