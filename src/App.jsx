import { useEffect } from "react"
import CartContainer from "./Components/CartContainer/CartContainer"
import Navbar from "./Components/Navbar/Navbar"
import { calculateTotal ,getCartItems} from "./slices/cart/cartSlice"
import { useSelector,useDispatch } from "react-redux"
import Modal from "./Components/Modal/Modal"


const App = () => {
  const {cartItem,isLoading}=useSelector((store)=>store.cart)
  const {isOpen}=useSelector((store)=>store.modal)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(calculateTotal());
  },[cartItem]);
  useEffect(()=>{
  dispatch(getCartItems())
  },[]);

  if(isLoading){
    return <div className="loading"><h1>Loading...</h1></div>
  }
  return (
    <main>

     {isOpen&&<Modal/>} 
      <Navbar/>
      <CartContainer/>
    </main>
  )
}
export default App