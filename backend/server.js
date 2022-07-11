const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require('./routes/userRoutes')
const academyRouter = require('./routes/academyRoutes')

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log('DATABASE CONNECTED SUCCESSFULLY!!!!!')
  })
  .catch((err) => {
    console.log(err)
  })

app.use('/api/users', userRouter)
app.use('/api/academy', academyRouter)

const PORT = process.env.PORT || 4500

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}!!!!!!!`)
})
