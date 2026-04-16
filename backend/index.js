const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' })
})

app.get('/quotes', (req, res) => {
  res.json([
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Focus on being productive instead of busy.", author: "Tim Ferriss" },
  ])
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})