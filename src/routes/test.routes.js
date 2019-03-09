const express = require('express')
const app = express()


const { Formulario } = require('../models/formulario')
const formulario = new Formulario()

app.get('/wdf', async (req, res) => {

    const db = await formulario.wdf()
    console.log(db.rows)

    return res.json(db.rows)
})

app.get('/wdf2', async (req, res) => {
    const db = await formulario.wdf2()
    console.log(db.rows)
    return res.json(db.rows)
})

module.exports = app