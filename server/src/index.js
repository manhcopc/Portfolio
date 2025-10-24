import express from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import routerPost from './route/posts.js'
import routerProjects from './route/projects.js'
import routerAuth from './route/auth.js'


dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const dbURL = process.env.DATABASE_URL
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  // methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))
// app.use(cors())
app.use('/api/posts', routerPost)
app.use('/api/projects', routerProjects)
app.use('/api/auth', routerAuth)

app.get('/api/health', (req, res) => {
  res.json({ok: true})
})

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log(`Server is listening on http://localhost:${PORT}/`);
})