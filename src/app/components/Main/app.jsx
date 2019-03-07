import React, { Component } from 'react'
import axios from 'axios'

class Main extends React.Component {

    constructor() {
        super()
        
        this.state = {
            title: 'Stack MERN'
        }

        axios.defaults.baseURL = '/data/api'
    }

    getMotivos () {
        axios.get('/motivos')
        .then(res => console.log('res', res.data))
        .catch(e => console.log('e', e))
    }

    componentDidMount() {
        this.getMotivos()
    }

    render(){
        const { title } = this.state

        return(
            <div>{title}</div>
        )
    }
}

export default Main