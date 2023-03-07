import React, { Component } from 'react'
import Body from './Body'
import Header from './Header'
import './home.css'
export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Header />
                <Body />
            </div>
        )
    }
}
