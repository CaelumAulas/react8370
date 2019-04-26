import React, { Component, Fragment } from 'react';
import classNames from 'classnames'

import Cabecalho from '../components/Cabecalho'
import NavMenu from '../components/NavMenu'
import Dashboard from '../components/Dashboard'
import Widget from '../components/Widget'
import TrendsArea from '../components/TrendsArea'
import Tweet from '../components/Tweet'
import { TweetsAPIService } from '../services/TweetsAPIService';


class Home extends Component {

    state = {
        novoTweet: 'asduhdhuas',
        tweets: []
    }

    constructor() {
        super()

        console.log('constructor')
    }

    componentDidMount() {
        console.log('didMount')
        this.carregaTweets()    
    }

    carregaTweets() {
        TweetsAPIService.obterTodos()
            .then((tweetsVindosDaAPI) => {
                this.setState({
                    tweets: tweetsVindosDaAPI
                })
            })
    }

    adicionaTweet = (infosDoEvento) => {
        infosDoEvento.preventDefault()
        const novoTweet = this.state.novoTweet

        if(novoTweet.length > 140 || novoTweet.length === 0) return
        
        TweetsAPIService.adiciona(novoTweet)
        .then((novoTweetObj) => {
            console.log(novoTweetObj)
            this.setState({
                tweets: [novoTweetObj, ...this.state.tweets],
                novoTweet: ''
            })
        })
        .catch((err) => {
            alert('Alguma coisa deu errado')
        })
    }

  render() {
    console.log('render')
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="omariosouto" />
        </Cabecalho>
        
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="novoTweet" onSubmit={this.adicionaTweet}>
                        <div className="novoTweet__editorArea">
                            <span className={classNames(
                                'novoTweet__status',
                                {
                                    'novoTweet__status--invalido': this.state.novoTweet.length > 140 
                                }
                            )}>
                                {this.state.novoTweet.length}/140
                            </span>
                            {/* <span className={`
                                novoTweet__status
                                ${
                                    this.state.novoTweet.length > 140
                                    ? 'novoTweet__status--invalido'
                                    : '' 
                                }
                                `}>
                                {this.state.novoTweet.length}/140
                            </span> */}
                            <textarea
                                onChange={(infosDoEvento) => {
                                    this.setState({
                                        novoTweet: infosDoEvento.target.value
                                    })
                                }}
                                value={this.state.novoTweet}
                                className="novoTweet__editor"
                                placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button
                            disabled={ this.state.novoTweet.length > 140 }
                            type="submit"
                            className="novoTweet__envia">Tweetar</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        {/* Expressions */}
                        { this.state.tweets.length === 0 ? 'Carregando...' : '' }
                        {
                            // Passa e resgata as props do usuario
                            // Faz um "carregando" enquanto não houverem tweets

                            this.state.tweets.map((tweetAtual, indice) => {
                                return <Tweet
                                    key={indice}
                                    usuario={tweetAtual.usuario}
                                    conteudo={tweetAtual.conteudo}
                                    totalLikes={tweetAtual.totalLikes}
                                    likeado={tweetAtual.likeado}/>
                            })
                        }
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default Home;
