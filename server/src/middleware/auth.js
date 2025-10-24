import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
function requireAuth(req, res, next) {
    const authHeader = req.headers["authorization"]
    if (!authHeader?.startsWith("Bearer ")) {
        return res.status(401).json("ERROR!")
    }
    
    const token = authHeader.split(" ")[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload
        next()
    } catch {
        res.status(401).json("Invalid token!")
    }
}
function requireAdmin(req, res, next) {
    if (req.user?.role !== "ADMIN") {
        return res.status(403).json({error: "ERROR!"})
    } 
    next()
}

export { requireAuth, requireAdmin }