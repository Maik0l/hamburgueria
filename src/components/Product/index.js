import './styles.css'

function Product( { handleClick, name, category, price, id_menu } ) {

    return (
            <div className="card">
                <div>{name}</div>
                <div className="category">{category}</div>
                <div className="preco">{price}</div>
                <div>
                <button onClick={() => {handleClick(id_menu)}}>Adicionar</button>
                </div>
            </div>
    )
}

export default Product
