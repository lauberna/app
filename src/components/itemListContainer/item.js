import ItemCount from "./itemCount"
import '../itemListContainer/item.css';
import itemImg from '../../images/bici.jpg';
import { Link } from "react-router-dom";


const Item = ({prod}) => {
    //console.log(prod)
    const onAdd = (cantidad) => {
        alert(`Agregaste ${ cantidad } productos`);
    };

    return(
        <div className="item">
            <img className="img" src={itemImg} alt="" />
            <Link to={`/detail/${prod.id}`}>
            <div className="degrade"></div>
            </Link>
            <div className='info'>
                <h3 className="titulo">{prod.name}</h3>
            </div>
        </div>
    )
}
    

    

export default Item;

