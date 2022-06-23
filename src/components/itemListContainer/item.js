import { Link } from "react-router-dom";

import '../itemListContainer/item.css'

const Item = ({prod}) => {
  return(
    <span className="item">
      <Link to={`/detail/${prod.id}`}>
        <img className="img" src={prod.img} alt="" />
      </Link>
      <h3 className="titulo">{prod.name}</h3>
    </span>
  )
}

export default Item;

