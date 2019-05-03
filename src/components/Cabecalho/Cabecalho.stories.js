import React from 'react';
import Cabecalho from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Cabecalho', module)
    .add('Cabecalho com um conteudo dentro', () => {
        return (
            <Cabecalho>
                Alo alo w brazil
            </Cabecalho>
        )
    })
    .add('Cabecalho com cor diferente', () => {
        return (
            <Cabecalho color='red'>
                Alo alo w brazil
            </Cabecalho>
        )
    })
