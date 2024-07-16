import Genre from "../models/Genre.js";
import asyncHandler from "../middlewares/asyncHandler.js"

const createGenre = asyncHandler(async(req,res)=>{
    try{
      const {name} = req.body
      if(!name){
        return res.json({error:"Name is required"})
      }
      const existingGenre = await Genre.findOne({name})
      if(existingGenre){
        return res.json({error:"Already exists"})
      }
     const genre = await new Genre({name}).save()
     res.json(genre)

    }catch(err){
      console.log(err)
      return res.status(400).json(error)
    }
})

const updateGenre = asyncHandler(async(req,res)=>{
  try{
    const {name} = req.body
    const {id} = req.params
 
    const genre = await Genre.findOne({_id:id})
    if(!genre){
      return res.status(404).json({error:"genre not found"})
    }
    genre.name = name
    const updateGenre = await genre.save() 
    res.json(updateGenre)

  }catch(err){
    console.error(err)
    res.status(500).json({err:"Internal server error"})
  }
})

const removeGenre = asyncHandler(async(req,res)=>{
  try{
    const {id} = req.params
    const removedGenre = await Genre.findByIdAndDelete(id)
    if(!removedGenre){
     return res.status(404).json({error:"genre not found"})
  }
  res.json(removedGenre)
   
  }catch(err){
    console.error(err)
    res.status(500).json({err:"Internal server error"})
  }
})

const listGenre = asyncHandler(async(req,res)=>{
  try{
    const all = await Genre.find({})
     res.json(all)

  }catch(err){
    console.log(err)
    return res.status(404).json(err.message)
  }
})

const readGenre = asyncHandler(async(req,res)=>{
   try{
      const genre = await Genre.findOne({_id:req.params.id})
      res.json(genre)
   }catch(err){
    console.log(err)
    return res.status(400).json(err.message)
   }
})

export {createGenre,updateGenre,removeGenre,listGenre,readGenre}