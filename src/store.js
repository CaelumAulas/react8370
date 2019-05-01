// import { createStore } from 'redux'

function createStore(reducer) {
    let state
    const subscribers = []

    function dispatch(acaoDisparadaPorAlgumDev) {
        // console.log('aqui')
        state = reducer(state, acaoDisparadaPorAlgumDev)

        subscribers.forEach((funcao) => funcao())
    }

    function subscribe(funcao) {
        // console.log('aqui')
        subscribers.push(funcao)
    }

    dispatch({ type: '@redux/init/ bhuhuadhuhsud' })

    return {
        dispatch,
        subscribe,
        getState: () => {
            return state
        }
    }
}



function tweetsReducer(stateDaAplicacao = [], acaoDisparadaPorAlguem) {
    console.log(acaoDisparadaPorAlguem)
    if(acaoDisparadaPorAlguem.type === 'CARREGA_TWEETS') {
        return acaoDisparadaPorAlguem.tweets
    }

    if(acaoDisparadaPorAlguem.type === 'ADD_TWEET') {
        return [acaoDisparadaPorAlguem.conteudo, ...stateDaAplicacao]
    }

    return stateDaAplicacao
}

export const store = createStore(tweetsReducer)
window.store = store


// store.subscribe(() => {
//     console.log('Alguem disparou uma ação, devemos fazer um setState')
//     console.log(store.getState())
// })
// store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['Alo alo wbrazil', 'oi'] })
// store.dispatch({ type: 'ADD_TWEET', conteudo: 'Novo tweet' })
