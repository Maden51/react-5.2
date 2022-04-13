import React from 'react'
import PropTypes from 'prop-types'

/**
 * Компонент отвечает за отображение рекламы
 */

function Adv({children, className, img }) {
  return (
      <div className="show-box">
        <img className={className} src={img} alt="реклама" />
        {children}
      </div>
  )
}

Adv.propTypes = {
    className: PropTypes.string,
    img: PropTypes.string
}

export default Adv
