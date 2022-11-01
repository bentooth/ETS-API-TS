import app from './app'

app.listen(process.env.PORT, () => {
  console.log(`ETS API listening on ${process.env.PORT} with NODE_ENV=${process.env.NODE_ENV}`)
});