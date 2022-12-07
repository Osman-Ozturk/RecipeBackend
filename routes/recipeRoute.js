import express from 'express'
import {getAllRecipes,getByIdRecipe,saveOneRecipe} from '../controllers/recipeController.js'
import { recipeValidator } from '../middleware/recipeValidator.js'
import { validateRequest } from '../middleware/validator.js'
import { saveComment } from '../controllers/commentController.js'
const router = express.Router()

router.route('/').get(getAllRecipes).post(recipeValidator,validateRequest,saveOneRecipe)
router.route('/:id').get(getByIdRecipe)
router.route('/:id/comment').post(saveComment)


export default router;