import React, { Component, Fragment } from 'react';
import classNames from 'classnames'

import Cabecalho from '../components/Cabecalho'
import NavMenu from '../components/NavMenu'
import Dashboard from '../components/Dashboard'
import Widget from '../components/Widget'
import TrendsArea from '../components/TrendsArea'
import Tweet from '../components/Tweet'

class Home extends Component {

    state = {
        novoTweet: 'asduhdhuas',
        tweets: ['alo alo wbrazil', 'sei la', 'asddasuhhusd']
    }


    adicionaTweet = (infosDoEvento) => {
        // PREVINE O RECARREGAMENTO DA PAGINA
        infosDoEvento.preventDefault()
        const novoTweet = this.state.novoTweet
        this.setState({
            tweets: [novoTweet, ...this.state.tweets],
            novoTweet: ''
        })
    }

  render() {
      console.log('[render]')
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
                        {
                            
                            this.state.tweets.map((tweetAtual, indice) => {
                                return <Tweet key={indice} conteudo={tweetAtual}/>
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
