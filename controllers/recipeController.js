import Recipe from "../models/RecipeModel.js"


const getAllRecipes = async (req,res)=>{
        try {
                const allRecipes= await Recipe.find().populate('comments')
                res.status(201).json(allRecipes)
        } catch (error) {
           console.log(error);     
        }

}
const getByIdRecipe = async (req,res)=>{
        try {
                const recipe= await Recipe.findById(req.params.id).populate('comments')
                res.status(201).json(recipe)
        } catch (error) {
           console.log(error);     
        }

}

const saveOneRecipe =async (req,res)=>{
        try {
                const recipe= await Recipe.create(req.body)
                res.status(201).json(recipe)
        } catch (error) {
           console.log(error);     
        }

}



export {getAllRecipes,getByIdRecipe,saveOneRecipe}