import "./KickerWithRail.css";
import KickerWithRailImg from "../images/KickerWithRail.png";
function KickerWithRail() {
  return (
    <div className="margin size">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img src={KickerWithRailImg} alt="" />
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title cardtxt">Kicker With Rail</h1>
                <p className="card-text">$12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default KickerWithRail;
