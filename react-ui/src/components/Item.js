import React from 'react'
import PropTypes from 'prop-types'
import * as Ons from 'react-onsenui'

const Item = ({ id, name, addedOn }) => (
  <ons-list-item key={id} className="inset">
    {name}
    <div className="right">Added: {addedOn}</div>
  </ons-list-item>
)

Item.propTypes = {
  name: PropTypes.string.isRequired,
  addedOn: PropTypes.string.isRequired
}

export default Item
