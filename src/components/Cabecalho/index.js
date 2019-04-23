import React, { Component } from 'react'
import './cabecalho.css'
// const Component = React.Component

export default class Cabecalho extends Component {
  render() {
    // const loginDoUsuario = this.props.loginDoUsuario
    // JSX = JavaScript XML
    return (
      <header className="cabecalho">
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