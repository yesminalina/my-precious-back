import { Router } from 'express'
import { getAllJoyas, getFilteredJoyas } from '../controllers/joyas.controller.js'

const router = Router()

router.get('/joyas', getAllJoyas)
router.get('/joyas/filtros', getFilteredJoyas)

export default router
