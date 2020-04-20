import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import { fetchItems } from '../actions/fetchItems'

class ItemList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchItems())
  }

  render() {
    const { error, loading, items } = this.props

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <ul>
        {items.map(item =>
          <Item key={item.id} {...item} />
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items.items,
  loading: state.items.loading,
  error: state.items.error
})

export default connect(mapStateToProps)(ItemList)
