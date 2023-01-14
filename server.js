const express= require("express")
const bodyParser= require("body-parser")

const app= express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res) {// if client requests for home page
    res.sendFile(__dirname+"/index.html")//send him whole html page 
})

app.post("/",function(req,res) {// when client makes post request , change html to thanks for visiting
    res.send("Thank for visiting")
})

app.get("/bmiCalculator",function(req,res) {//if client requests for bmi calculator 
    res.sendFile(__dirname+"/index.html")//send index.html
})

app.post("/bmiCalculator",function(req,res) {//when client makes post request in bmicalculator
    var wt=parseFloat(req.body.weight) 
    var ht=parseFloat(req.body.height) 

    var bmi= wt/(ht*ht)
    res.send("Your BMI is "+bmi)//change html to bmi val
})

app.listen(3000,function () {
    console.log("server started on port 3000")
})
