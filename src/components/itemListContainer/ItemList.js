import Item from './item'
import './itemList.css'


export default function ItemList ({productos}){

    return(
        <div className='itemList'>
        {productos.map((prod) => <Item key={prod.id} prod={prod}/>)}
        </div>
    )

}
