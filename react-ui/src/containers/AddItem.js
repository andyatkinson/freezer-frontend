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

  const setSubmitState = function () {
    const btn = document.getElementById('submit')
    btn.setAttribute('disabled', '')
    btn.setAttribute('value', 'Saving...')
  }

  const handleClose = function() {
    document.getElementById('empty').hide();
  }

  const saveItem = function (event) {
    // synthetic event
    if (!input.value.trim()) {
      document.getElementById('empty').show();
      return
    }

    setSubmitState()

    const newItem = {name: input.value, addedOn: today}
    const hostname = window.location.hostname
    const baseUrl = '//' + (window.location.hostname === 'localhost' ? 'localhost:1323' : 'freezer-stuff.herokuapp.com')
    const api = '/items'

    axios.post(baseUrl + api, newItem)
    .then(res => {
      dispatch(addItem(res.data))

      history.replace("/")
    })

    // dispatch(addItem(input.value))
    input.value = ''
  }

  const buttonStyle = {
    width: "100%",
    margin: "30px auto 0px auto"
  }

  const containerStyle = {
    width: "95%",
    margin: "10px auto"
  }

  const inputStyle = {
    textSize: "3em",
    width: "100%"
  }

  return (
    <div>
      <ons-page>
        <ons-alert-dialog id="empty">
          <div class="alert-dialog-content">
            Please enter item content
          </div>
          <ons-alert-dialog-button onClick={handleClose.bind(this)}>OK</ons-alert-dialog-button>
        </ons-alert-dialog>
        <ons-toolbar>
          <div className="center">Add Item</div>
        </ons-toolbar>
        <div style={containerStyle}>
          <form onSubmit={(e) => {saveItem(); e.preventDefault();}}>
              <ons-input modifier="underbar"
                placeholder="Lasagna w/ Meat (Servings: 4)..."
                float
                ref={node => input = node}
                style={inputStyle}
              ></ons-input>
              <p>
                Date Added: {today}
              </p>
            <input id="submit" type="submit" value="Add" className="button--large--cta" style={buttonStyle} />
          </form>
        </div>
      </ons-page>
    </div>
  )
}

export default connect()(AddItem)
