import React, { Component } from 'react'

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'Stack MERN'
        }
    }


    render(){
        const { title } = this.state
        return(
            <div>{title}</div>
        )
    }
}

export default Main