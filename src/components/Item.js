import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ id, name, addedOn }) => (
  <li key={id}>{name} - {addedOn}</li>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  addedOn: PropTypes.string.isRequired
}

export default Item
