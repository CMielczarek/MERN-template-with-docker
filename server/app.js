const express = require('express')
const cors = require('cors') // it's necessary
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello, world!' })
})

const PORT = 5500

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT} ...`)
})
