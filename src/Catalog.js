import "./Catalog.css";
import ProductCard from "./components/ProductCard";
import KickerWithRail from "./images/KickerWithRail.png";
import MegaKickerGap from "./images/MegaKickerGap.jpg";
import Kicker from "./images/Kicker.png";
import Rail from "./images/Rail.jpg";
import OuterCurvedBench from "./images/OuterCurvedBench.png";
import ledge from "./images/ledge.png";
function Catalog() {
  return (
    <div className="catalog">
      <h1>Products</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <ProductCard
              img={ledge}
              name="2 Step Ledge"
              link="/Products/TwoStepLedge"
            ></ProductCard>
          </div>
          <div className="col">
            <ProductCard img={Rail} name="Standard Rail "></ProductCard>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <ProductCard img={Kicker} name="Kicker"></ProductCard>
          </div>
          <div className="col">
            <ProductCard
              img={MegaKickerGap}
              name="Mega Kicker Gap"
            ></ProductCard>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <ProductCard
              img={KickerWithRail}
              name="Kicker with Rail"
              link="/Products/KickerWithRail"
            ></ProductCard>
          </div>
          <div className="col">
            <ProductCard
              img={OuterCurvedBench}
              name="Outer Curved Bench"
            ></ProductCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
