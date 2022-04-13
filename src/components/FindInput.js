import React from 'react'
import PropTypes from 'prop-types'
import { InputGroup, Input, Button } from 'reactstrap'

/**
 * Компонент "Поиск": Отвечает за поиск информации в интернете
 */

function FindInput({children, className}) {
  return (
    <div className="input-box">
        <InputGroup className={className}>
            <Input />
            <Button color="primary">Найти</Button>
        </InputGroup>
        {children}
    </div>
  )
}

FindInput.propTypes = {
  className: PropTypes.string
}

export default FindInput
