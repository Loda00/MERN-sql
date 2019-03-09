import React, { Component } from 'react'
import axios from 'axios'

import './style.sass'

class Contacto extends React.Component {

    constructor() {
        super()

        this.state = {
            title: '...'
        }

        axios.defaults.baseURL = '/data/api'
    }

    render(){
        return (
            <div><p>Contacto</p></div>
        )
    }
}

export default Contacto