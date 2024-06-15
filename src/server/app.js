import express from 'express'
import joyasRoutes from '../server/routes/joyasRoutes.js'
import { insumosLog } from './middlewares/joyas.middleware.js'

const app = express()

const PORT = process.env.PORT || 3000

app.use('/', insumosLog, joyasRoutes)

app.listen(PORT, () => console.log(`SERVER ON http://localhost:${PORT} 🚀`))
