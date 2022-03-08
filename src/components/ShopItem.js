import '../styles/ShopItem.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function ShopItem(props) {
  const item = props.item;
  const img = require(`../assets/${item.imgName}`);
  return (
    <div className="ShopItem" key={item.id}>
      <div className="shop-item-top">
        <img src={img} />
        <div className="name">{item.name}</div>
      </div>
      <div className='shop-item-bot'>
        <div className='price'>${item.price}</div>
        <button onClick={() => props.addToCart(item)}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ShopItem;