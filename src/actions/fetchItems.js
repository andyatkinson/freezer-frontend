import axios from 'axios'

function getItems() {
  return axios.get("//localhost:1323/items")
    .then(function (response) {
      return {items: response.data}
    })
    .catch(function (error) {
      return error
    })
}

// function fakeGetItems() {
//   return new Promise(resolve => {
//     // Resolve after a timeout so we can see the loading indicator
//     setTimeout(
//       () =>
//         resolve({
//           items: [
//             {
//               id: 0,
//               name: "Apple",
//               addedOn: "2020-01-02"
//             },
//             {
//               id: 1,
//               name: "Bananas",
//               addedOn: "2020-02-01"
//             },
//             {
//               id: 2,
//               name: "Strawberries",
//               addedOn: "2020-03-01"
//             }
//           ]
//         }),
//       1000
//     );
//   });
// }

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
