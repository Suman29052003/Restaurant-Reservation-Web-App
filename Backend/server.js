import app from "./app.js";

app.listen(process.env.PORT || 3000, (req,res) =>{
    console.log(`Server is running on ${process.env.PORT} port`);
})