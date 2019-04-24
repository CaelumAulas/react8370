import React, { Component } from 'react';
import Cabecalho from './components/Cabecalho';
import { NavMenuLogado } from './components/NavMenuLogado';
// https://github.com/caelum
// /arquivos-js46
// /blob/master/curso/01-htmlDoCabecalho
class Home extends Component {
  render() {
    return (
      <div>
        <Cabecalho >
          <NavMenuLogado loginDoUsuario="omariosouto"/>
        </Cabecalho>
      </div>
    );
  } 
}

export default Home;
