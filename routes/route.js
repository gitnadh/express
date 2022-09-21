const express = require("express");
const router = express.Router();


router.get("/services",(req,res)=>{
    res.render("Ourservices");
});


router.get("/Contactus",(req,res)=>{
    res.render("Contactus");
});


module.exports = router;