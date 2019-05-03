import React, { Component } from 'react'
import fetch from 'node-fetch'

// Usando isso, vc é obrigado a usar Node
    // Aprender a lidar com uma infra de Node
export default class Home extends Component {
    
    static async getInitialProps() {
        console.log('antes do fetch')
        const dadosDousuario = await fetch('https://api.github.com/users/omariosouto').then((resposta) => {
            return resposta.json()
        })
        console.log('depois do fetch')

        return {
            login: dadosDousuario.login
        }
    }


    render() {

        return (
            <div>
                Olá mundo!
                { this.props.login } 
            </div>
        )
    }
}