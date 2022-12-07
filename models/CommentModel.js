import mongoose from "mongoose";

const commentModel = new mongoose.Schema({
        name:{type:String},
        text:{type:String},
        recipe:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Recipe"
        }
},{timestamps:true} )

const Comment = mongoose.model('Comment',commentModel);
export default Comment;