const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://navtejdgc:Navtejsingh>@cluster0.fc0vn7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
module.exports={
    connection
}