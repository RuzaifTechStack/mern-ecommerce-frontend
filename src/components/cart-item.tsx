import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { server } from "../redux/store";
import { CartItem } from "../types/types";
type CartItemProps = {
  cartItem: CartItem;
  incrementHandler:(cartItem: CartItem) => void;
  decrementtHandler:(cartItem: CartItem) => void;
  removetHandler:(id: string) => void;
};

const CartItem = ({
  cartItem, 
  incrementHandler, 
  decrementtHandler, 
  removetHandler}: CartItemProps) => {

  const {photo, productId, name, price, quantity} = cartItem;
  return (
    <div className="cart-item">
      <img src={`${server}/${photo}`} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>
      <div>
        <button onClick={()=> decrementtHandler(cartItem)}>-</button>
        <p>{quantity}</p>
        <button onClick={()=> incrementHandler(cartItem)}>+</button>
      </div>
      <button onClick={()=> removetHandler(productId)}><FaTrash/></button>
    </div>
  )
}

export default CartItem

