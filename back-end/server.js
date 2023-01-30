const express = require('express')
const mongoose = require('mongoose')
const app = express()
const uri = "mongodb+srv://sendo:asadzz123@nghia64.kr8lhc7.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
    try{
        await mongoose.connect(uri)
        console.log('connected!')
    }catch(error){
        console.error(error)
    }
}
mongoose.set("strictQuery", false);
connect()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('OK')
})
app.listen(8000, () => {
    console.log('http://localhost:8000');
})