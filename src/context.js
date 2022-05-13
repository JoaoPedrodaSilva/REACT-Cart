import React, {useContext, useReducer, useEffect} from 'react'
// import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({children}) => {    

    //fetching data
    const fetchData = async () => {
        dispatch({type: 'LOADING'})
        const response = await fetch(url)
        const cart = await response.json()
        dispatch({type:'DISPLAY_ITEMS', payload: cart})
    }
    useEffect(() => {fetchData()}, [])

    //declaring initial state
    const initialState = {
        loading: false,
        // cart: cartItems,
        cart: [],
        total: 0,
        amount: 0
    }
    const [state, dispatch] = useReducer(reducer, initialState)


    // reducer functions
    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }
    const removeItem = (id) => {
        dispatch({type: 'REMOVE_ITEM', payload: id})
    }      
    const toggleAmount = (id, type) => {
        dispatch({type:'TOGGLE_AMOUNT', payload: {id, type}})
    }
    // const increaseAmount = (id) => {
    //     dispatch({type: 'INCREASE_AMOUNT', payload: id})
    // }
    // const decreaseAmount = (id) => {
    //     dispatch({type: 'DECREASE_AMOUNT', payload: id})
    // }  
    useEffect(() => {
        dispatch({type:'UPDATE_TOTALS'})
    }, [state.cart])


    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                removeItem,
                // increaseAmount,
                // decreaseAmount,
                toggleAmount
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export {AppContext, AppProvider}
