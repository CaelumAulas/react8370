import { createStore, combineReducers } from 'redux'


function tweetsReducer(stateDaAplicacao = [], acaoDisparadaPorAlguem) {
    console.log('[acaoDisparadaPorAlguem]',acaoDisparadaPorAlguem)

    if(acaoDisparadaPorAlguem.type === 'CARREGA_TWEETS') {
        return acaoDisparadaPorAlguem.tweets
    }

    if(acaoDisparadaPorAlguem.type === 'ADD_TWEET') {
        return [acaoDisparadaPorAlguem.tweet, ...stateDaAplicacao]
    }
    // 2 - faz isso aqui
    // Fazer o código que remove o tweet e retorna a store atualizada
    if(acaoDisparadaPorAlguem.type === 'EXCLUIR_TWEET') {
        const idDoTweetQueVaiSumir = acaoDisparadaPorAlguem.idDoTweet
        return stateDaAplicacao.filter(tweet => {
            return tweet._id !== idDoTweetQueVaiSumir;
        });
    }

    if(acaoDisparadaPorAlguem.type === 'LIKE_TWEET') {
        const idDoTweetClicado = acaoDisparadaPorAlguem.idDoTweet
        const listaAtualDeTweets = stateDaAplicacao
        return listaAtualDeTweets.map((tweet) => {
            if(tweet._id === idDoTweetClicado) {
                tweet.likeado = true
                tweet.totalLikes = 1000 
            }

            return tweet
        })
    }

    return stateDaAplicacao
}

export const store = createStore(combineReducers({
    tweets: tweetsReducer
}))
window.store = store


// store.subscribe(() => {
//     console.log('Alguem disparou uma ação, devemos fazer um setState')
//     console.log(store.getState())
// })
// store.dispatch({ type: 'CARREGA_TWEETS', tweets: ['Alo alo wbrazil', 'oi'] })
// store.dispatch({ type: 'ADD_TWEET', conteudo: 'Novo tweet' })








// function createStore(reducer) {
//     let state
//     const subscribers = []

//     function dispatch(acaoDisparadaPorAlgumDev) {
//         // console.log('aqui')
//         state = reducer(state, acaoDisparadaPorAlgumDev)

//         subscribers.forEach((funcao) => funcao())
//     }

//     function subscribe(funcao) {
//         // console.log('aqui')
//         subscribers.push(funcao)
//     }

//     dispatch({ type: '@redux/init/ bhuhuadhuhsud' })

//     return {
//         dispatch,
//         subscribe,
//         getState: () => {
//             return state
//         }
//     }
// }