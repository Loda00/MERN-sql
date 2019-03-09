const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const { port } = require('./config/config')
const app = express()


// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


//Public Static
app.use(express.static(path.join(__dirname, '../public')))

app.use('/data/api',
    require('./routes/form.routes'),
    require('./routes/test.routes')
)

app.get('/*',  (req, res) => {
    res.redirect('http://localhost:3000/')
})

app.listen(port, () => {
    console.log(`Server up 200 ${port}`)
})

