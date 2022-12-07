import Comment from "../models/CommentModel.js";

const saveComment  =async (req,res) =>{
        try {
               const comment = await Comment.create(req.body) 
               res.status(201).json(comment)
        } catch (error) {
                console.log(error);
        }
}

export {saveComment}