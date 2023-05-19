import views from "../views.svg"
import share from "../share.svg"
function Post(props) {
  return (
    <div className="  post-cont">
        <img src={props.ban} alt="post 1" />
        <div className="post">
            <div className="post-main">
                <div className="post-type">
                <img src={props.type} alt="" />
                </div>
                <div className="post-header container-fluid p-0">
                    <div className="row">
                        <div className="col-10">
                            {props.header}
                        </div>
                        <div className="col-2  d-flex justify-content-end align-items-center" style={{gap:"3px"}}>
                            <div className="post-header-dot" style={{background:"black",width:"5px",height:"5px",borderRadius:"50%"}}></div>
                            <div className="post-header-dot" style={{background:"black",width:"5px",height:"5px",borderRadius:"50%"}}></div>
                            <div className="post-header-dot" style={{background:"black",width:"5px",height:"5px",borderRadius:"50%"}}></div>
                            
                        </div>
                    </div>
                </div>
                <div className="post-para">
                    <p>

                    {props.text}
                    </p>
                    <div className="abs" >...</div>
                </div>
                <div className="post-footer d-flex p-0 justify-content-between align-items-center" >
                        <div className="poster-image">
                            <img src={props.image} alt="" />
                        </div>
                        <div className="view-wrapper d-flex align-items-center "style={{gap:"40px"}}>
                            <div className="views d-flex" style={{gap:"8px"}}>
                                <img src={views} alt="" />
                                <div> 1.4K views</div>
                            </div>
                            
                            <img src={share} alt="" className="share" />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Post