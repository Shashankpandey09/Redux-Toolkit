import React from "react"
import CartItems from '../CartItems/CartItems'
import { useSelector,useDispatch } from "react-redux"

import {open} from '../../slices/modal/modal';
const CartContainer = () => {
    const dispatch=useDispatch();
    const {cartItem,amount ,total}=useSelector((store)=>store.cart)
 
  if(amount<1){
    return (
        <section className="cart">
            <header>
                <h2>Your Bag</h2>
                <h4 className="empty-cart">Is Currently Empty</h4>
            </header>
        </section>
    )
    
  
}
return(
    <section className="cart">
           <header>
                <h2>Your Bag</h2>
                </header>
       <div>
        {cartItem.map((item)=>(
           <CartItems key={item.id} {...item}/>
        ))}
       </div>
       <footer>
        <hr />
        <div className="cart-total" style={{display:'flex',justifyContent:'space-between'}}>
               
               <h4>
                total
               </h4>
           
            <h4>
                ${total.toFixed(2)}
            </h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch(open())} >clear cart</button>
       </footer>
    </section>
)
}
export default CartContainer