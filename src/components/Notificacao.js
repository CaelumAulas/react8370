import React, { Component, useState, useEffect } from 'react'

// subscribe
export class Notificacao extends Component {
    state = { msg: '' }
    componentDidMount() {
        window.store.subscribe(() => {
            this.setState({
                msg: window.store.getState().notificacao
            })
        })
    }
    render() {
        const hasNotification = this.state.msg.length
        if(hasNotification) {
            return (
                <div className="notificacaoMsg" onAnimationEnd={() => {
                    window.store.dispatch({ type: 'NOTIFICACAO_REMOVE' })
                }}>
                    {this.state.msg}
                </div>
            )
        }

        return ''
    }
}



// export const Notificacao = () => {
//     const [notificacao, setNotificacao] = useState('asduhdsahu')
//     const hasNotification = notificacao.length

//     useEffect(() => {
//         console.log('[Notificacao.js] didMount')
//         const unsubscribe = window.store.subscribe(() => {
//             setNotificacao(window.store.getState().notificacao)
//         })
//         return () => {
//             console.log('[Notificacao.js] willUnmount')
//             unsubscribe()
//         }
//     })
    
//     if(hasNotification) {
//         return (
//             <div className="notificacaoMsg" onAnimationEnd={() => {
//                 window.store.dispatch({ type: 'NOTIFICACAO_REMOVE' })
//             }}>
//                 {notificacao}
//             </div>
//         )
//     }

//     return ''
    
// }