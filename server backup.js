const express= require("express")
const bodyParser= require("body-parser")

const app= express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res) {
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/",function(req,res) {
    res.send("Thank for visiting")
})

app.get("/bmiCalculator",function(req,res) {
    res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/bmiCalculator",function(req,res) {
    var wt=parseFloat(req.body.weight) 
    var ht=parseFloat(req.body.height) 

    var bmi= wt/(ht*ht)
    res.send("Your BMI is "+bmi)
})

app.listen(3000,function () {
    console.log("server started on port 3000")
})
