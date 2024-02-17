import { useDispatch } from "react-redux"
import { clearCart} from "../../slices/cart/cartSlice"
import {close} from '../../slices/modal/modal';
const Modal = () => {
  
    const dispatch=useDispatch();
  return (
   <aside className="modal-container">
    <div className="modal">
        <h4>Do you wanna clear all items?</h4>
        <div className="btn-container">
            <button className="btn confirm-btn" onClick={()=>{dispatch(clearCart()) 
            dispatch(close())}}> confirm</button>
            <button className="btn clear-btn" onClick={()=>dispatch(close())}> cancel</button>
        </div>
    </div>
   </aside>
  )
}
export default Modal