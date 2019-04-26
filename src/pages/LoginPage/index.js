import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'



class LoginPage extends Component {

    state = {
        values: {},
        login: 'omariosouto',
        senha: '123456',
        errors: {}
    }

    onLoginSubmit = (infosDoEvento) => {
        infosDoEvento.preventDefault()
        fetch('http://twitelum-api.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "login": this.state.login, // omariosouto
                "senha": this.state.senha // 123456
            })
        })
        .then((respostaDoServer) => {
            if(respostaDoServer.ok) return respostaDoServer.json()

            throw new Error('Aconteceu alguma cagada na hora de fazer login :(')
        })
        .then((respostaConvertidaEmObjeto) => {
            const token = respostaConvertidaEmObjeto.token
            localStorage.setItem('TOKEN', token)
            this.props.history.push('/')
        })
        .catch((err) => {
            console.log(err.message)
            this.setState({
                login: '',
                senha: ''
            })
        })
    } 


    handleChange = (infosDoEvento) => {
        const nameDoCampo = infosDoEvento.target.name
        this.setState({ [nameDoCampo]: infosDoEvento.target.value })
        // this.setState({ values: { ...this.state.values, [nameDoCampo]: infosDoEvento.target.value } })
    }


    render() {
        console.log(this.props)

        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form onSubmit={this.onLoginSubmit} className="loginPage__form" action="/">
                                <FormInputDoMeuSite
                                    label="Login"
                                    name="login"
                                    onChange={this.handleChange}
                                    value={this.state.login} />

                                <FormInputDoMeuSite
                                    label="Senha"
                                    name="senha"
                                    onChange={this.handleChange}
                                    type="password"
                                    value={this.state.senha} />
                            
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


const FormInputDoMeuSite = (props) => {
    return (
        <div className="loginPage__inputWrap">
            <label className="loginPage__label" htmlFor="login">{props.label}</label> 
            <input
                onChange={ props.onChange }
                value={props.value}
                className="loginPage__input"
                type={props.type}
                id={props.name}
                name={props.name} />
            { props.value.length === 0 ? `O campo ${props.label} é obrigatório` : '' }
        </div>
    )
}


export default LoginPage