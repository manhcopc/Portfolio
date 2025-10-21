import express from 'express'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const app = express()
const PORT = process.env.PORT || 5001
const prisma = new PrismaClient()
app.use(express.json())

// Đăng ký
app.post("/api/auth/register", async (req, res) => {
    const { name, password, email } = req.body
    try {
        const existing = await prisma.user.findUnique({ where: { email } })
        if (existing) {
            return res.status(400).json({ error: "Email already exists!" })
        }
        const passwordHash = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: { name, email, passwordHash, role: "USER" }
        })
        res.json({ id: user.id, name: user.name, email: user.email })
    } catch (error) {
        return res.status(500).json({ error: "Server error!" })
    }
})

// Đăng nhập
app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password!" })
        }
        const isValid = await bcrypt.compare(password, user.passwordHash)
        if (!isValid) {
            return res.status(400).json({ error: "Invalid email or password!" })
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.json({
            token,
            user: { id: user.id, name: user.name, email: user.email, role: user.role }
        })
    } catch (error) {
        res.status(500).json({ error: "Server error" })
    }
})

// app.listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`)
// })
