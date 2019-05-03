import React from 'react';
import { Modal } from './index'
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module)
    .add('Modal aberto', () => {
        return (
            <Modal isOpen={true}>
                {
                    () => (
                        <p>Bagulhos</p>
                    )
                }
            </Modal>
        )
    })
    .add('Modal fechado', () => {
        return (
            <Modal isOpen={false}>
                {
                    () => (
                        <p>Bagulhos</p>
                    )
                }
            </Modal>
        )
    });