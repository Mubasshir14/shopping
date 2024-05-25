
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleCart = p => {
    const isExist = cart.find(pd => pd.id == p.id);
    if (!isExist) {
      setCart([...cart, p]);
    }
    else {
      alert('Already in cart');
    }
  }


  const handleDelete = id =>{
    const newCart = cart.filter(item => item.id != id);
    setCart(newCart);
  }

  console.log(products);
  return (
    <>
      <div className="main-container">

        {/* cards */}
        <div className="cards-container">
          {
            products.map(pd => <SingleProduct handleCart={handleCart} key={pd.id} pd={pd} ></SingleProduct>)
          }

        </div>

        {/* cart */}
        <div className="cart-container">
          <h1>This is Cart</h1>
          <div className="cart-title">
            <h5>Name </h5>
            <h5>Price </h5>
          </div>
          <hr />
          <div >
          {
            cart.map((item, idx) => (
              <div className="cart-info">
                <p>{idx + 1}</p>
                <h5>{item.title.slice(0,10)}</h5>
                <h5>{item.price}</h5>
                <button onClick={()=>handleDelete(item.id)} className="add-btn">Delete</button>
              </div>
             
            ))
          }
          <hr />
        </div>
        </div>
      </div>
    </>
  )
}

export default App
