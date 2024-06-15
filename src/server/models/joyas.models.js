import format from 'pg-format'
import db from '../database/db_connect.js'

export const selectAllJoyas = ({
  limits = 5,
  order_by: orderBy = 'stock_ASC',
  page = 1
}) => {
  const [field, order] = orderBy.split('_')

  const offset = Math.abs(+page === 0 ? 0 : (page - 1)) * limits

  const formattedQuery = format('SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s', field, order, limits, offset)
  return db(formattedQuery)
}

export const filterJoyas = ({
  precio_max: precioMax,
  precio_min: precioMin,
  categoria,
  metal
}) => {
  const filters = []
  const values = []
  let query

  if (precioMax) {
    values.push(precioMax)
    filters.push(`precio <= $${values.length}`)
  }

  if (precioMin) {
    values.push(precioMin)
    filters.push(`precio >= $${values.length}`)
  }

  if (categoria) {
    values.push(categoria)
    filters.push(`categoria = $${values.length}`)
  }

  if (metal) {
    values.push(metal)
    filters.push(`metal = $${values.length}`)
  }

  if (filterJoyas.length > 0) {
    query = `SELECT * FROM inventario WHERE ${filters.join(' AND ')}`
  }

  return db(query, values)
}
