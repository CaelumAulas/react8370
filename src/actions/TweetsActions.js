import { TweetsAPIService } from "../services/TweetsAPIService";

const CARREGA_TWEETS = 'CARREGA_TWEETS'

const carregaAction = (tweetsVindosDaAPI) => { // Action Pura
    return { type: CARREGA_TWEETS, tweets: tweetsVindosDaAPI }
}

export const TweetsActions = {
    carrega: () => { // Thunk Actions (Action que retorna uma promisse)
        return TweetsAPIService.obterTodos().then(tweetsVindosDaAPI => {
            window.store.dispatch(carregaAction(tweetsVindosDaAPI))
        });
    },
    adiciona: (novoTweet) => {
        return TweetsAPIService.adiciona(novoTweet)
            .then(novoTweetObj => {
                window.store.dispatch({ type: 'ADD_TWEET', tweet: novoTweetObj })
            })
    },
    like: (tweetId) => {
        window.store.dispatch({ type: 'LIKE_TWEET', idDoTweet: tweetId })

        return TweetsAPIService.like(tweetId)
            .then(() => {
                console.log('Foi pro server')
            })
    }
}