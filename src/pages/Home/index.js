import React, { Component, Fragment } from "react";


import Cabecalho from "../../components/Cabecalho";
import NavMenu from "../../components/NavMenu";
import Dashboard from "../../components/Dashboard";
import Widget from "../../components/Widget";
import TrendsArea from "../../components/TrendsArea";
import Tweet from "../../components/Tweet";
import { TweetsAPIService } from "../../services/TweetsAPIService";
import { Modal } from "../../components/Modal";
import { TweetsActions } from "../../actions/TweetsActions";
import { NovoTweetFormContainer } from "./components/NovoTweetForm";

class Home extends Component {
  state = {
    novoTweet: "asduhdhuas",
    tweets: [],
    tweetAtivoNoModal: {},
  };

  componentDidMount() {
    this.carregaTweets();

    window.store.subscribe(() => {
      this.setState({
        tweets: window.store.getState().tweets
      })
    })
  }

  carregaTweets = () => TweetsActions.carrega()

  adicionaTweet = infosDoEvento => {
    infosDoEvento.preventDefault();
    const novoTweet = this.state.novoTweet;
    if (novoTweet.length > 140 || novoTweet.length === 0) return;
    TweetsActions.adiciona(novoTweet)
      .then(() => this.setState({ novoTweet: '' }))
      .catch(err => {
        alert("Alguma coisa deu errado");
      });
  };

  removeTweetById = idDoTweetQueVaiSumir => {
    TweetsAPIService.removeById(idDoTweetQueVaiSumir)
    .then(() => {
      window.store.dispatch({ type: 'EXCLUIR_TWEET', idDoTweet: idDoTweetQueVaiSumir })
      this.fechaModal();
    });
  };

  fechaModal = () => this.setState({ tweetAtivoNoModal: {} }) 


  abreModal = (tweetQueVaiProModal) => {
    this.setState({
      tweetAtivoNoModal: tweetQueVaiProModal
    }, () => {
      console.log(this.state.tweetAtivoNoModal)
    })
    // Ajustar o componente do modal
  }

  render() {
    return (
      <Fragment>
        <Cabecalho>
          <NavMenu usuario="omariosouto" />
        </Cabecalho>

        <div className="container">
          <Dashboard>
            <Widget>
              <NovoTweetFormContainer />
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
