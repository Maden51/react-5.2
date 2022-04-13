import React from 'react'
import PropTypes from 'prop-types'


/**
 * Компонент отвечает за любое перечисление элементов
 */

function List({ children, className }) {
  return (
    <ul className={className}>
        {children}
    </ul>
  )
}

List.propTypes = {
  className: PropTypes.string
}

export default List
