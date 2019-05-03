import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './cabecalho.css'
// import './navMenu.css'

class Cabecalho extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string
    }

    render() {
        return (
            <header className="cabecalho" style={{ backgroundColor: this.props.color }}>
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <a href="/">Twitelum</a>
                    </h1>
                    { this.props.children }
                </div>
            </header>
        )
    }
}

export default Cabecalho