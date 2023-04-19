import "./ProductCard.css";
import { Link } from "react-router-dom";
function ProductCard(props) {
  return (
    <Link className="link" to={props.link}>
      <div className="card">
        <img src={props.img} className="card-img-top cardimg" alt="Ramps"></img>
        <div className="card-body">
          <h1 className="card-title cardtxt">{props.name}</h1>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
