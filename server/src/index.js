import express from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import routerPost from './route/posts'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const dbURL = process.env.DATABASE_URL
app.use(express.json())
app.use(cors())
app.use('api/posts', routerPost)


app.get('/api/health', (req, res) => {
  res.json({ok: true})
})

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log(`Server is listening on http://localhost:${PORT}/api/health`);
})