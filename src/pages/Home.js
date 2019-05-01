import React, { Component, Fragment } from "react";
import classNames from "classnames";

import Cabecalho from "../components/Cabecalho";
import NavMenu from "../components/NavMenu";
import Dashboard from "../components/Dashboard";
import Widget from "../components/Widget";
import TrendsArea from "../components/TrendsArea";
import Tweet from "../components/Tweet";
import { TweetsAPIService } from "../services/TweetsAPIService";
import { Modal } from "../components/Modal";

class Home extends Component {
  state = {
    novoTweet: "asduhdhuas",
    tweets: [],
    tweetAtivoNoModal: {},
    menuAberto: tr
  };

  constructor() {
    super();

    console.log("constructor");
  }

  componentDidMount() {
    console.log("didMount");
    this.carregaTweets();

    window.store.subscribe(() => {
      this.setState({
        tweets: window.store.getState()
      })
    })
  }

  carregaTweets() {
    TweetsAPIService.obterTodos().then(tweetsVindosDaAPI => {
      window.store.dispatch({ type: 'CARREGA_TWEETS', tweets: tweetsVindosDaAPI })
    });
  }

  adicionaTweet = infosDoEvento => {
    infosDoEvento.preventDefault();
    const novoTweet = this.state.novoTweet;

    if (novoTweet.length > 140 || novoTweet.length === 0) return;

    TweetsAPIService.adiciona(novoTweet)
      .then(novoTweetObj => {
        console.log(novoTweetObj);
        this.setState({
          tweets: [novoTweetObj, ...this.state.tweets],
          novoTweet: ""
        });
      })
      .catch(err => {
        alert("Alguma coisa deu errado");
      });
  };

  removeTweetById = idDoTweetQueVaiSumir => {
    TweetsAPIService.removeById(idDoTweetQueVaiSumir)
    .then(() => {
      const listaDeTweetsAtualizada = this.state.tweets.filter(tweet => {
        return tweet._id !== idDoTweetQueVaiSumir;
      });
      this.setState({
        tweets: listaDeTweetsAtualizada
      }, () => {
        this.fechaModal()
      });
    });
  };


  fechaModal = () => this.setState({ tweetAtivoNoModal: {} }) 


  abreModal = (tweetQueVaiProModal) => {
    console.log('Alguém clicou na área de conteudo')
    this.setState({
      tweetAtivoNoModal: tweetQueVaiProModal
    }, () => {
      console.log(this.state.tweetAtivoNoModal)
    })
    // Ajustar o componente do modal
  }

  render() {
    console.log("render");
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
                  <span
                    className={classNames("novoTweet__status", {
                      "novoTweet__status--invalido":
                        this.state.novoTweet.length > 140
                    })}
                  >
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
                    onChange={infosDoEvento => {
                      this.setState({
                        novoTweet: infosDoEvento.target.value
                      });
                    }}
                    value={this.state.novoTweet}
                    className="novoTweet__editor"
                    placeholder="O que está acontecendo?"
                  />
                </div>
                <button
                  disabled={this.state.novoTweet.length > 140}
                  type="submit"
                  className="novoTweet__envia"
                >
                  Tweetar
                </button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <div className="tweetsArea">
                {this.state.tweets.length === 0 ? "Carregando..." : ""}
                {
                this.state.tweets.map(tweetAtual => {
                  return (
                    <Tweet
                      key={tweetAtual._id}
                      id={tweetAtual._id}
                      usuario={tweetAtual.usuario}
                      conteudo={tweetAtual.conteudo}
                      totalLikes={tweetAtual.totalLikes}
                      removivel={tweetAtual.removivel}
                      onRemove={() => this.removeTweetById(tweetAtual._id)}
                      onContentAreaClick={() => this.abreModal(tweetAtual)}
                      likeado={tweetAtual.likeado}
                    />
                  );
                })}
              </div>
            </Widget>
          </Dashboard>
        </div>

        <Modal
          isOpen={Boolean(this.state.tweetAtivoNoModal._id)}
          onClose={ this.fechaModal }>
            {
              () => (
                  <Tweet
                    id={this.state.tweetAtivoNoModal._id}
                    usuario={this.state.tweetAtivoNoModal.usuario}
                    conteudo={this.state.tweetAtivoNoModal.conteudo}
                    totalLikes={this.state.tweetAtivoNoModal.totalLikes}
                    removivel={this.state.tweetAtivoNoModal.removivel}
                    onRemove={() => this.removeTweetById(this.state.tweetAtivoNoModal._id)}
                    likeado={this.state.tweetAtivoNoModal.likeado}
                  />
                )
            }
        </Modal>


      </Fragment>
    );
  }
}

export default Home;
