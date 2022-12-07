import mongoose from "mongoose";
import Comment from "./CommentModel.js";
const recipeModel = new mongoose.Schema({
img:String,
title:{type:String,required:true},
subtitle:String,
author:{type:String,required:true},
preparation:{type:String,required:true},
ingredients:[{name:String, quantity:Number, type:String}],
tags:{type:String,enum: ["Beef", "Pork", "Chicken" ,"Vegan", "Vegetarian", "FastFood"]},
comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
}
} )

const Recipe =mongoose.model('Recipe',recipeModel)
export default Recipe;

