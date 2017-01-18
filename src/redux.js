store
reducers
action

{
  type: 'ADD_TODO',
  payload: {
    text: 'learn css'
  }
}
addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      text: text
    }
  }
}




state = {
  products: [],
  orders: [],
  user: {}
}

const function productsReducer(prevProducts = [], action) {
  switch(action.type) {
    case: 'ADD_PRODUCT': return prevProducts.concat(action.product)
  }
  return newProucts
}
const ordersReducer(prevOrders, action) {
  return newOrders
}
const userReducer(prevUser, action) {
  return newUser
}

const rootReducer(prevState, action) {
  return {
    products: productsReducer(prevState.products, action),
    orders: ordersReducer(prevState.orders, action),
    user: userReducer(prevState.user, action)
  }
}

store.dispatch({
  type: 'ADD_PRODUCT',
  product: {
    id: 1,
    name: 'shirt'
  }
})
