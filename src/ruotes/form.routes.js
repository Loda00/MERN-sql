const express = require('express')
const app = express()


const { Formulario } = require('../models/formulario')
const formulario = new Formulario()

app.get('/motivo', async (req, res) => {

    const db = await formulario.test2(2)
    console.log(db.rows)

    return res.json(db.rows)
})

app.get('/motivos', async (req, res) => {
    const db = await formulario.test()
    console.log(db.rows)
    return res.json(db.rows)
})

module.exports = app