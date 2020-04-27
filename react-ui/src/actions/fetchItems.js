import axios from 'axios'

function getItems() {
  return axios.get("https://freezer-stuff.herokuapp.com/items")
    .then(function (response) {
      return {items: response.data}
    })
    .catch(function (error) {
      return error
    })
}

export function fetchItems() {
  return dispatch => {
    dispatch(fetchItemsBegin())
    return getItems()
      .then(json => {
        dispatch(fetchItemsSuccess(json.items))
        return json.items;
      })
      .catch(error =>
        dispatch(fetchItemsFailure(error))
      )
  }
}

// wiring for the actions
export const ADD_ITEM = 'ADD_ITEM'
export const FETCH_ITEMS_BEGIN   = 'FETCH_ITEMS_BEGIN'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'

export const addItem = (item) => ({
  type: ADD_ITEM,
  item: item
})

export const fetchItemsBegin = () => ({
  type: FETCH_ITEMS_BEGIN
})

export const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: { items }
})

export const fetchItemsFailure = error => ({
  type: FETCH_ITEMS_FAILURE,
  payload: { error }
})
