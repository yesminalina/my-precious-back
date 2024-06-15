import { selectAllJoyas, filterJoyas } from '../models/joyas.models.js'
import joyasHATEOAS from '../helpers/HATEOAS.js'

export const getAllJoyas = (req, res) => {
  selectAllJoyas(req.query)
    .then((joyas) => {
      const result = joyasHATEOAS(joyas)
      return res.status(200).json({ status: true, code: 200, message: result })
    })
    .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
}

export const getFilteredJoyas = (req, res) => {
  filterJoyas(req.query)
    .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
    .catch((error) => {
      return res.status(500).json({ status: false, code: 500, message: error })
    })
}
