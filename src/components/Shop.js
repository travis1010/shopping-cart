import '../styles/Shop.css'
import { useEffect, useState } from 'react';
import ShopItem from './ShopItem';
import Cart from './Cart';
import uniqid from 'uniqid';

function Shop() {
  const [inventory, setInventory] = useState([]);
  const [filter, setFilter] = useState([]);
  const [cart, setCart] = useState([]);

  async function getInventory() {
    const inv = await fetch("../assets/inventory.json")
    .then(res => res.json());
    setInventory(inv);
    setFilter(inv);
  }

  function filterInventory(type) {
    if (type === 'all') {
      setFilter(inventory);
      document.querySelector('.shop-title').textContent = `Shop`;
    } else {
      setFilter(inventory.filter((disc) => disc.type === type));
      document.querySelector('.shop-title').textContent = `Shop ${type.charAt(0).toUpperCase() + type.slice(1)}s`;
    }
  }

  async function showCart() {
    document.querySelector('.shop-main').style.width = "calc(100% - 580px)";
    document.querySelector('.Cart').style.display = 'flex';
    window.setTimeout(function () {
      document.querySelector('.cart-window').style.transform = 'none';
    }, 1)
  }

  function closeCart() {
    document.querySelector('.shop-main').style.width = "100%";
    document.querySelector('.Cart').style.display = 'none';
    document.querySelector('.cart-window').style.transform = 'translateX(584px)';
  }

  function addToCart(item) {
    const itemIndex = cart.findIndex((currentItem) => {
      return currentItem.id === item.id;
    })
    
    if(itemIndex >= 0) {
      item.quantity++;
      setCart([...cart.slice(0, itemIndex), item, ...cart.slice(itemIndex+1)]);
    } else {
      item.id = uniqid();
      item.quantity = 1;
      setCart([...cart, item]);
    }
    showCart();
  }

  function incrementItem(item) {
    const itemIndex = cart.findIndex((currentItem) => {
      return currentItem.id === item.id;
    })
    item.quantity++;
    setCart([...cart.slice(0, itemIndex), item, ...cart.slice(itemIndex+1)]);
  }

  function decrementItem(item) {
    const itemIndex = cart.findIndex((currentItem) => {
      return currentItem.id === item.id;
    })
    item.quantity--;

    if(item.quantity > 0){
      setCart([...cart.slice(0, itemIndex), item, ...cart.slice(itemIndex+1)]);
    } else {
      setCart([...cart.slice(0, itemIndex), ...cart.slice(itemIndex+1)]);
    }
  }

  function removeFromCart(cartItem) {
    setCart(cart.filter((item) => item.id !== cartItem.id));
  }

  function getCartCount() {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    })
    return count;
  }

  useEffect(() => {
    getInventory();
  }, []);

  return (
    <div className='Shop'>
      <div className='big-cart' onClick={showCart}>
        <i className="bi bi-cart4"></i>
        <span className='cart-count'> {getCartCount()} Item(s)</span>
      </div>
      <div className='shop-container'>
        <div className='shop-menu'>
          <ul>
            <li><a href='#' onClick={() => filterInventory('all')}>All Discs</a></li>
            <li><a href='#' onClick={() => filterInventory('driver')}>Drivers</a></li>
            <li><a href='#' onClick={() => filterInventory('midrange')}>Midranges</a></li>
            <li><a href='#' onClick={() => filterInventory('putter')}>Putters</a></li>
          </ul>
        </div>
        <div className='shop-main'>
          <Cart close={closeCart} cart={cart} removeFromCart={removeFromCart} incrementItem={incrementItem} decrementItem={decrementItem}/>
          <h1 className='shop-title'>Shop</h1>
          <div className='shop-items'>
          { 
            filter.map((item) => (
              <ShopItem item={item} addToCart={addToCart} key={item.id}/>
            ))
          }
          </div>
          
        </div>
      </div>
    </div>
  )
}






export default Shop;