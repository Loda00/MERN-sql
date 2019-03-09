import React, { Component } from 'react'
import axios from 'axios'
import './style.sass'
import { BrowserRouter, Link, Route } from 'react-router-dom'

class Main extends React.Component {

    constructor() {
        super()

        this.state = {
            title: 'Stack MERN'
        }

        axios.defaults.baseURL = '/data/api'
    }

    getMotivos() {
        axios.get('/motivos')
            .then(res => console.log('res', res.data))
            .catch(e => console.log('e', e))
    }

    componentDidMount() {
        // this.getMotivos()
    }

    render() {
        const { title } = this.state

        return (
            <BrowserRouter>
                <React.Fragment>
                    <nav>
                        <div className="logo" >
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                        </div>
                        <div className="navigation" >
                            <div>
                                <Link to="/">Home</Link>
                            </div>
                            <div>
                                <Link to="/about">About</Link>
                            </div>
                            <div>
                                <Link to="/topics">Topics</Link>
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/" component={Test1} />
                    <Route path="/about" component={Test2} />
                    <Route path="/topics" component={Test3} />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

function Test1({ match }) {
    return (
        <div>
            <h3>HOME 1111</h3>
        </div>
    );
}

function Test2({ match }) {
    return (
        <div>
            <h3>ABOUT</h3>
        </div>
    );
}
function Test3({ match }) {
    return (
        <div>
            <h3>TOPICS</h3>
        </div>
    );
}


export default Main