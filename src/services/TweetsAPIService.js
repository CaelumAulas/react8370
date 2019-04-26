export class TweetsAPIService {

    static obterTodos() {
        return fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`)
        .then((responseDoServer) => {
            if(responseDoServer.ok)  return responseDoServer.json()

            throw new Error('alguma coisa')
        })
        .then((tweetsDoServer) => {
            return [...tweetsDoServer]
        })
    }

    // Promise Chain
    static adiciona(conteudoDoNovoTweet) {
        return fetch(`http://twitelum-api.herokuapp.com/tweets?X-AUTH-TOKEN=${localStorage.getItem('TOKEN')}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                conteudo: conteudoDoNovoTweet
            })
        })
        .then((responseDoServer) => {
            if(responseDoServer.ok)  return responseDoServer.json()

            throw new Error('alguma coisa')
        })
        .then((respostaConvertida) => {
            return {
                ...respostaConvertida,
                
            }
        })
    }
}
