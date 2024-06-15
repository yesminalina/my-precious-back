export const joyasHATEOAS = (joyas) => {
  const results = joyas.map((joya) => {
    return {
      name: joya.nombre,
      href: `/joyas/joya/${joya.id}`
    }
  })
  const totalJoyas = joyas.length
  const stockTotal = joyas.reduce((acc, curr) => {
    return acc + curr.stock
  }, 0)

  return {
    totalJoyas,
    stockTotal,
    results
  }
}

export default joyasHATEOAS
