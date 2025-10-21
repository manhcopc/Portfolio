import { PrismaClient } from "@prisma/client";
import express from 'express'
import { requireAuth, requireAdmin } from '../middleware/auth'

const app = express()
const prisma = new PrismaClient()
app.use(experss.json())
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await prisma.post.findMany({ where: { published: true } }) 
            return res.json(posts)

    } catch (error) {
        return res.status(400).json({error: `System error!`})
    }
})
router.get('/:slug', async (req, res) => {
    try {
        const post = await prisma.post.findUnique({ where: { slug: req.params.slug } }) 
            return res.json(post)

    } catch (error) {
        return res.status(400).json({error: `System error!`})
    }
})
router.post('/', requireAuth, requireAdmin, async (req, res) => {
    const { title, slug, content, published } = req.body
    try {
        const post = await prisma.post.create({data: {title, slug, content, published, authorId: req.user.id}})
        return res.json(post)
    } catch (error) {
        return res.status(400).json({error: `System error!`})
    }
})
router.put('/:id', requireAuth, requireAdmin, async (req, res) => {
    const {id, title, slug, content, published } = req.body
    
    try {
        const existing = await prisma.post.findUnique({ where: {id: prisma.post.id}})
        if (!existing) {
            return res.json({error: `Invalid post`})
        }
        const update = await prisma.post.update({where:{ id: Number(req.params.id) }, data:{title, slug, content, published}})
        return res.json(update)
    } catch (error) {
        return res.status(400).json({error: `ERROR!`})
    }
})
router.delete('/:id', requireAuth, requireAdmin, async (req, res) => {
    const {id} = req.body
    try {
        const existing = await prisma.post.findUnique({ where: { id: Number(req.params.id) } })
        if (!existing) {
            return res.status(400).json({error: `Invalid post`})
        }
        await prisma.post.delete({ where: { id } })
        return res.json({message: `Deleted`})
    } catch (error) {
        return res.status(400).json({error: `ERROR!`})
    }
})

export default router