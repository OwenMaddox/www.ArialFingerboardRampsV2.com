import "./KickerWithRail.css";
import KickerWithRailImg from "../images/KickerWithRail.png";
function KickerWithRail() {
  return (
    <div className="margin size">
      <div className="container text-center">
        <div className="row">
          <div className="col imgholder">
            <img src={KickerWithRailImg} alt="Kicker With Rail" />
          </div>
          <div className="col">
            <div className="card txt size">
              <div className="card-body">
                <h1 className="card-title cardtxt">Kicker With Rail</h1>
                <p className="card-text">$12 + 12$ Shipping</p>
                <p>$24 Total</p>
                <form
                  target="paypal"
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="UMXGJJAEDTDNL"
                  />

                  <button
                    class=" px-4 bg-blue-600 rounded text-white hover:bg-blue-400"
                    type="submit"
                    border="0"
                    name="submit"
                    alt="PayPal - The safer, easier way to pay online!"
                  >
                    Add To Cart
                  </button>
                </form>

                <p className="spacing">8 x 4 inch wood Kicker with a smooth</p>
                <p>1 inch tall rail on the side</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default KickerWithRail;
