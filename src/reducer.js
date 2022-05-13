const reducer = (state, action) => {
    if(action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if(action.type === 'REMOVE_ITEM') {
        return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
    }
    if(action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map(item => {
            if(item.id === action.payload.id) {
                if(action.payload.type === 'inc') {
                    return {...item, amount: item.amount + 1}
                }
                if (action.payload.type === 'dec') {
                    return {...item, amount: item.amount - 1}
                }
            }
            return item
        }).filter(item => item.amount !== 0)
        return {...state, cart: tempCart}
    }
    // if(action.type === 'INCREASE_AMOUNT') {
    //     let tempCart = state.cart.map(item => {
    //         if(item.id === action.payload) {
    //             return {...item, amount: item.amount + 1}
    //         }
    //         return item
    //     })
    //     return {...state, cart: tempCart}
    // }
    // if(action.type === 'DECREASE_AMOUNT') {
    //     let tempCart = state.cart.map(item => {
    //         if(item.id === action.payload) {
    //             return {...item, amount: item.amount - 1}                
    //         }
    //         return item
    //     }).filter(item => item.amount !== 0)
    //     return {...state, cart: tempCart}
    // }
    if(action.type === 'UPDATE_TOTALS') {
        let {total, amount} = state.cart.reduce((returnedTotal, item) => {
            const {price, amount} = item

            //adding up the total price
            returnedTotal.total += price * amount

            //adding up the total unities
            returnedTotal.amount += amount

            return returnedTotal
        }, {total: 0, amount: 0})
        
        total = parseFloat(total.toFixed(2))
        
        return {...state, total, amount}
    }
    if(action.type === 'LOADING') {
        return {...state, loading: true}
    }
    if(action.type === 'DISPLAY_ITEMS') {
        return {...state, cart:action.payload, loading: false}
    }
    throw new Error ('no matching action type')
}

export default reducer