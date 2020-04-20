//
// this "owns" state.items
//
import {
  ADD_ITEM,
  FETCH_ITEMS_BEGIN,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from '../actions/fetchItems'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function itemReducer(
  state = initialState,
  action
) {
  switch(action.type) {
    case ADD_ITEM:
      return {
        items: [
          ...state.items,
          action.item
        ]
      }

    case FETCH_ITEMS_BEGIN:
      // mark the state as loading
      // reset any errors
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_ITEMS_SUCCESS:
      // set loading to false
      // replace items with items from server
      return {
        ...state,
        loading: false,
        items: action.payload.items
      }

    case FETCH_ITEMS_FAILURE:
      // set loading to false
      // TODO
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }

    default:
      //always have a default case
      return state;
  }
}
