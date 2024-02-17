import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from'axios';
const url='https://course-api.com/react-useReducer-cart-project'
import {open} from '../modal/modal'

const initialState={
    cartItem:[],
    amount:1,
    total:0,
    isLoading:true,
};

export const getCartItems=createAsyncThunk('cart/getCartItems',
    async(_,thunkAPI)=>{
  try {
    const resp=await axios(url);
    console.log(resp)
    return resp.data;

  } catch (error) {
  return thunkAPI.rejectWithValue(error.response)
  }
});

export const cartSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.cartItem=[];
        },
        removeItem:(state,action)=>{
      
            const itemId=action.payload;
            state.cartItem=state.cartItem.filter((item)=>item.id!==itemId);
        },
        increment:(state,{payload})=>{
            const cartItem=state.cartItem.find((item)=>item.id===payload.id)
            cartItem.amount=cartItem.amount+1;;
        },
        decrease:(state,{payload})=>{
        
            const cartItem=state.cartItem.find((item)=>item.id===payload.id)
            cartItem.amount=cartItem.amount-1;
        },
        calculateTotal:(state)=>{
            let amount=0;
            let total=0;
            state.cartItem.forEach((item)=>{
                amount+=item.amount
                total+=item.amount*item.price;
            })
            state.amount=amount;
            state.total=total;
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCartItems.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getCartItems.fulfilled,(state,action)=>{
            console.log(action)
            state.isLoading=false;
            state.cartItem=action.payload
        }).addCase(getCartItems.rejected,(state,{payload})=>{
            state.isLoading=false;
            console.log(payload)
        })
    }
    
    
  
},);
export const {clearCart,removeItem,increment,decrease,calculateTotal} =cartSlice.actions
export default cartSlice.reducer;
