import './App.css';
import { useState } from 'react';
import MenuContainer from './components/MenuContainer'
import Header from './components/Header'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99 },
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
  ]);

  const [currentName, setCurrentName] = useState("");
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  const handleClick = (id) => {
    const findElement = products.find((item) => item.id === id);
    const duplicatedElement = currentSale.find((item) => item.id === id)
    if (duplicatedElement === undefined) {
      setCurrentSale([...currentSale, findElement])
      const totalPrice = cartTotal + findElement.price
      totalPrice.toFixed(2)
      setCartTotal(totalPrice)
    }
  }
    
  const showProducts = (value) => {
    const filtered = products.filter((item) => item.name === value)
    setFilteredProducts(filtered)
  }
  
  return (
    <div className="App">
      <Header/>
        <div className="input">
            <input 
                value={currentName}
                onChange={e => setCurrentName(e.target.value)}>
            </input>
            <button onClick={() => {showProducts(currentName)}}>Pesquisar</button>
        </div>
      <div className="container">
        <div className="menu-container">
          {(filteredProducts.length === 0) ? (<MenuContainer products={products} handleClick={handleClick}/>) : 
          (<MenuContainer products={filteredProducts} handleClick={handleClick}/>)}
        </div>
        <div className="price">
        Preço total: {cartTotal}
        </div>
      </div>
      <div className="market">
        {currentSale.map((item, i) => <div className="market-item" key={i}>
          <div>{item.name}</div>
          <div>{item.category}</div>
          <div>{item.price}</div>
        </div>)}
      </div>
    </div>
  );
}

export default App;
