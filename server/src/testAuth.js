import { requireAdmin, requireAuth } from './middleware/auth'
import express from 'express'

const app = express()
// app.use(express.urlencoded(par))//\
//test requireAuth
app.get('/api/protected', requireAuth, (req, res) => {
    res.json({message: `xin chao user ${req.user.id}`, user: req.user})
})

//test requireAdmin
app.get('/api/admin-test', requireAuth, requireAdmin, (req, res) => {
  res.json({ message: "Bạn là admin, vào được route này!", user: req.user })
})