import '../styles/Cart.css'

function Cart(props) {
  return (
    <div className="Cart">
      <div className='cart-window'>
        <div className='close'>
          <a href='#' onClick={props.close}>Close</a>
        </div>
        <h2>My Cart</h2>
        <table className='cart-items'>
          <tbody>
            {
              props.cart.map((item) => (
                <tr key={item.id}>
                  <td className='cart-price'>${item.price}</td>
                  <td className='cart-name'>{item.name}</td>
                  <td className='cart-quantity'>
                    <button className='quantity-button' onClick={() => {props.decrementItem(item)}}>-</button>
                    &nbsp;{item.quantity}&nbsp;
                    <button className='quantity-button' onClick={() => {props.incrementItem(item)}}>+</button>
                  </td>
                  <td><button onClick={() => {props.removeFromCart(item)}}>REMOVE</button></td>
                </tr>
              ))
              
            }
          </tbody>
        </table>
        <div className='subtotal'>
          Cart Subtotal: ${(Math.round(props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0) * 100)  / 100).toFixed(2)}
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart;