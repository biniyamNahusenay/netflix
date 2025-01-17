import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import path from "path"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import genreRoutes from "./routes/genreRoutes.js"
import movieRoutes from "./routes/movieRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js" 

dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const PORT = process.env.PORT || 5000

app.use("/api/v1/users",userRoutes)
app.use("/api/v1/genre",genreRoutes)
app.use("/api/v1/movies",movieRoutes)
app.use("/api/v1/upload",uploadRoutes)

const __dirname = path.resolve()
app.use("/uploads",express.static(path.join(__dirname + "/uploads")))
app.use(express.static(path.join(__dirname,'/frontend')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))