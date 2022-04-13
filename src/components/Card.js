import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент "карточка новостей" отвечает за отображение блоков с информацией
 */

function Card({ className, children, title }) {
  return (
    <div className={className}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

export default Card
