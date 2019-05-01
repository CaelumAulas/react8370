import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import './modal.css'
import Widget from '../Widget';

export const Modal = ({ children, isOpen, onClose }) => {
    function handleBlackAreaClick(infosDoEvento) {
        const isModalTag = infosDoEvento.target.classList.contains('modal')
        if(isModalTag) onClose && onClose()
    }
    return (
        <div onClick={handleBlackAreaClick} className={classNames(
            "modal",
            {
                "modal--active": isOpen
            }
        )}>
            <div className="modal__container">
                <Widget>
                    { isOpen && children() }
                </Widget>
            </div>
        </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
}