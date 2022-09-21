const express = require("express");
const app = express();
app.set("view engine", "ejs");

var currentdate = new Date();

function requestTime(req, res, next) {
 
  if (
    (currentdate.getHours() <= 9 ||
    currentdate.getHours() >= 17 )
   
  ){ 
   return res.send(`we are not working now .. it's ${
        (req.originalUrl,  currentdate.getHours())
      }  please come in other time`)
  } 
   if(( currentdate.getDay() ==0 ||
  currentdate.getDay() == 6)){
    return res.send(`we are not working now .. it's ${
        (req.originalUrl, currentdate.getDay())
      }  please come in other time`)
  }
   else{return next();} 
}
app.get("/", (req, res) => {
    res.render("Home");
  });
  app.get("/Contactus", (req, res) => {
    res.render("Contactus");
  });
app.use(requestTime);

app.get("/services", (req, res) => {
  res.render("Ourservices");
});


/* const userRouter = require("./routes/route");
app.use("/",userRouter);  */

app.listen(4000);
