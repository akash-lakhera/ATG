import loc from "../location.svg";
import cross from "../loc-edit.svg";
function Suggest() {
  return (
    <div className="suggest-cont d-none d-xl-block">
      <div >
        <div className="d-flex justify-content-between location ">
          <img src={loc} alt="" />{" "}
          <input
            className="flex-grow-1 location-input"
            type="text"
            placeholder="Enter Your location"
          />{" "}
        
            <img className="del-loc" src={cross} alt="" />
         
        </div>
        <div className="location-text">
          Your location will help us serve better and extend a personalised
          experience.
        </div>
      </div>
    </div>
  );
}
export default Suggest;
