import "./Home.css";
import ProductCard from "./components/ProductCard";
import KickerWithRail from "./images/KickerWithRail.png";
import MegaKickerGap from "./images/MegaKickerGap.jpg";
import Event from "./images/Event.jpg";
function Home() {
  return (
    <div className="home">
      <h1>Featured Ramps</h1>
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
              img={MegaKickerGap}
              name="Mega Kicker Gap"
            ></ProductCard>
          </div>
        </div>
      </div>

      <div className="about">
        <h1 className="title">Arial Fingerboard Ramps</h1>
        <h2>
          We are a fingerboard company devoted to helping fingerboarders of all
          levels get quality ramps.
        </h2>
        <img className="event" src={Event} alt="Event"></img>
        <div class="container">
          <div class="row">
            <h2 className="paragraph">
              When my friend and I got into fingerboarding we started looking at
              ramps online. We were astonished by the price of the ramps and we
              thought it could be done for much cheaper. We started on our
              mission to handcraft each and every ramp for half the price as
              other companys. We started vending at local markets to get are
              name out. We were featured in the towns newpaper and facebook
              page. And that was how Arial Fingerboard Ramps was born.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
