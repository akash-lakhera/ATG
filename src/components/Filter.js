import bl from "../bl-triangle.svg"
import grp from "../grp.svg"
function Filter() {
  return (
    <div className=" filter-cont  d-flex align-items-center justify-content-between">
      <div className="filters d-none d-lg-flex">
        <span className="span-filter ">All Posts(32)</span>
        <span>Article</span>
        <span>Event</span>
        <span>Education</span>
        <span>Job</span>
      </div>
        <div className="filter-l d-lg-none">
            Posts(368)
        </div>


      <div className="join p-0 d-none d-lg-flex" style={{gap:"10px"}}>
      <label className="filter-l d-flex" style={{fontWeight:500,padding:"10px 7px",borderRadius:"5px",background:"#F1F3F5"}}>
            Write a Post
           
            <img style={{marginLeft:"10px",width:"10px"}} src={bl} alt="" />
        </label>
        <button style={{gap:"6px"}}  className="btn d-flex align-items-center btn-primary"><img src={grp} alt="" />  Join group</button>
      </div>
      <label className="filter-l d-flex d-lg-none" style={{fontWeight:500,padding:"10px 7px",borderRadius:"5px",background:"#F1F3F5"}}>
            Filter :
            <select style={{border:"none",background:"#F1F3F5"}} name="" id="">
                <option value="">All</option>
                <option value=""></option>
                <option value=""></option>
            </select  >
            <img style={{marginLeft:"10px"}} src={bl} alt="" />
        </label>

    </div>
    
  );
}
export default Filter;
