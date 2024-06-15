export const insumosLog = (req, res, next) => {
  console.log(
    {
      method: req.method,
      body: req.body,
      params: req.params,
      query: req.query
    }
  )
  next()
}
