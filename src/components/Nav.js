import rect from "./Rectangle.svg";
import oval from "../Oval.svg";
import triangle from "../triangle.svg";
import atg from "../atg-logo.svg";
import blTriangle from "../bl-triangle.svg";
import search from "../search.svg";
function Nav(props) {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex justify-content-end justify-content-lg-between align-items-center nav">
        <div>
          <img className="d-lg-none" src={rect} alt="" />
          <img className="d-none d-lg-block" src={atg} alt="" />
        </div>
        <div>
          <img className="d-lg-none" src={oval} alt="" />
          <div className="input-cont d-none d-lg-flex align-items-center">
            <img src={search} alt="" />
            <input
              className="search"
              type="text"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
        </div>
        <div>
          <img className="d-lg-none" src={triangle} alt="" />
          <div onClick={props.setShowLog} className="create-acc d-none d-lg-flex">
            Create account. <span className="span-free"> It's Free!</span>
            <img style={{ margin: "10px 7px" }} src={blTriangle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;
