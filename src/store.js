import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './slices/cart/cartSlice'
import modalReducer from './slices/modal/modal'
export const store=configureStore({
  reducer:{
    cart:cartReducer,
    modal:modalReducer,
  },
},);