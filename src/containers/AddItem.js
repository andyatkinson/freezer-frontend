import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/fetchItems'
//import freezerService from '../services/freezer'
import axios from 'axios'

const AddItem = ({ dispatch }) => {
  let input
  const today = new Date().toJSON().slice(0,10)

  const saveItem = function (event) {
    // synthetic event
    if (!input.value.trim()) {
      return
    }

  const newItem = {name: input.value, addedOn: today}

  axios.post("http://localhost:1323/items", newItem)
    .then(res => {
      console.log("resp",res)
      console.log("newitem",newItem)
      dispatch(addItem(res.data))
    })

    // dispatch(addItem(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={(e) => {saveItem(); e.preventDefault();}}>
        <input ref={node => input = node} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

export default connect()(AddItem)
