const Course = require('../models/Course');

exports.courseCreate = async (req, res)=>{
   
   try{
    const course= await Course.create(req.body)

        res.status(201).json({
            status:"Success",
            course,
        })
   }catch(error){
       res.status(400).json({
           status:"Fail",
           error,
       })
   }
}

exports.getAllCourses = async (req, res)=>{
   
    try{
     const courses= await Course.find()
 
         res.status(201).render("courses",{
            courses,
            page_name:"courses"
         })
    }catch(error){
        res.status(400).json({
            status:"Fail",
            error,
        })
    }
 }