import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions/fetchItems'
//import freezerService from '../services/freezer'
import axios from 'axios'
import * as Ons from 'react-onsenui'

import { useHistory } from "react-router-dom"

const AddItem = ({ dispatch }) => {
  let history = useHistory();
  let input
  const today = new Date().toJSON().slice(0,10)

  const saveItem = function (event) {
    console.log("save item")
    // synthetic event
    if (!input.value.trim()) {
      return
    }

    const newItem = {name: input.value, addedOn: today}

    axios.post("http://localhost:1323/items", newItem)
    .then(res => {
      dispatch(addItem(res.data))

      history.replace("/")
    })

    // dispatch(addItem(input.value))
    input.value = ''
  }

  return (
    <div>
      <ons-page>
        <ons-toolbar>
          <div className="center">Add Item</div>
        </ons-toolbar>
        <form onSubmit={(e) => {saveItem(); e.preventDefault();}}>
          <ons-list>
            <ons-list-header>Details</ons-list-header>
            <ons-list-item>
              <ons-input modifier="underbar"
              placeholder="Lasagna w/ Meat (Servings: 4)..."
              float
              ref={node => input = node}
            ></ons-input>
            </ons-list-item>
          </ons-list>
          <input type="submit" value="Add" className="button--large--cta" />
        </form>
      </ons-page>
    </div>
  )
}

export default connect()(AddItem)
