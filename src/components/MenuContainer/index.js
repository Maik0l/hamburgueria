import Product from "../Product"
import './styles.css'


function MenuContainer( { products, handleClick, handlePrice }) {

    return(
        <div className="card__container">
            {products.map((item, i) => <Product key={i} name={item.name}
            category={item.category}
            price={item.price}
            id_menu={item.id}
            handleClick={handleClick}
            handlePrice={handlePrice}
            />)}
        </div>
    )
}

export default MenuContainer