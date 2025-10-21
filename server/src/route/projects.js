import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()
router.use(express.json())

// Lấy danh sách project
router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany()
    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects!' })
  }
})

// Lấy chi tiết project theo id
router.get('/:id', async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: Number(req.params.id) },
    })
    if (!project) {
      return res.status(404).json({ error: 'Không tìm thấy project!' })
    }
    res.json(project)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching project!' })
  }
})

// Tạo project mới
router.post('/', async (req, res) => {
  try {
    const { name, description, tags, githubUrl, demoUrl } = req.body
    const project = await prisma.project.create({
      data: { name, description, tags, githubUrl, demoUrl },
    })
    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ error: 'Error creating project!' })
  }
})

// Cập nhật project
router.put('/:id', async (req, res) => {
  try {
    const { name, description, tags, githubUrl, demoUrl } = req.body
    const updated = await prisma.project.update({
      where: { id: Number(req.params.id) },
      data: { name, description, tags, githubUrl, demoUrl },
    })
    res.json(updated)
  } catch (error) {
    res.status(500).json({ error: 'Error updating project!' })
  }
})

// Xóa project
router.delete('/:id', async (req, res) => {
  try {
    const existing = await prisma.project.findUnique({
      where: { id: Number(req.params.id) },
    })
    if (!existing) {
      return res.status(404).json({ error: 'Project không tồn tại!' })
    }
    await prisma.project.delete({ where: { id: Number(req.params.id) } })
    res.json({ message: 'Deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Error deleting project!' })
  }
})

export default router
