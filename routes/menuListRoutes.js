const express=require("express");
const router=express.Router();
const MenuItem=require("../models/menuItem");
router.get("/",async(req,res)=>{
    try{
        const data= await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});

    }


})
router.post("/",async(req,res)=>{
    try{
        const data=req.body;
        const newMenu=new MenuItem(data);
        const response=await newMenu.save();
        console.log("menu saved");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});

    }
})
router.get("/:taste",async(req,res)=>{
     try{
        const taste=req.params.taste;
        if(taste==="Sour" || taste==="Spicy" || taste==="Sweet"){
        const response=await MenuItem.find({taste:taste});
        console.log("response fetched");
        res.status(200).json(response);
     }
     else{
        res.status(404).json({error:"Invalid Item type"});
     }
    }
    catch(err){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});

    }
});
router.put("/:id",async(req,res)=>{
    try{
        const menuId=req.params.id;
        const updatedData=req.body;
        const response=await MenuItem.findByIdAndUpdate(menuId,updatedData,{
            new:true,
            runValidators:true,
        });
        if(!response){
            res.status(404).json({error:"Invalid type"});  
        }        
        console.log("data updated");
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server Error"});
    }

})
router.delete("/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const response=await MenuItem.findByIdAndDelete(id);
        if(!response){
            return res.status(404).json({error:"Item not found"});
         }
         console.log("data deleted");
         res.status(200).json({message:"Item deleted successfully"});
    }   
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server Error"});
    }
})
//comment added for testing purpose

module.exports=router;