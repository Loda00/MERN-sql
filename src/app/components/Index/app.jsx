import React, { Component } from 'react'
import axios from 'axios'

class Index extends React.Component {

    constructor() {
        super()

        this.state = {
            title: 'Stack MERN'
        }

        axios.defaults.baseURL = '/data/api'
    }

    render(){
        return (
            <div>Index  test</div>
        )
    }
}

export default Index