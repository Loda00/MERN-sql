const express = require('express')
const morgan = require('morgan')
const path = require('path')

const { port } = require('./config/config')
const app = express()


// Middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//Public Static
app.use(express.static(path.join(__dirname, '../public')))


app.use('/data/api', require('./ruotes/form.routes'))


app.listen(port, () => {
    console.log(`Server up 200 ${port}`)
})

