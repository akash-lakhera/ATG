import ill from "../atg_illustration.svg";
import fb from "../fb.svg";
import goog from "../goog.svg";
import cross from "../cross.svg"
function Login(props) {
  return (
    <div className="login-cover">
    <div className="login-cont">
        <div className="cross" onClick={props.setShowLog}><img src={cross} alt="" /></div>
      <div className="login-header p-0 d-flex align-items-center justify-content-center">
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </div>
      <div className="log-pad">
        <div className="login-header-2 d-flex justify-content-between align-items-center">
          Create Account
          <div className="already">
            <span className="login-span">Already have an account?</span>{" "}
            <span> Sign In</span>
          </div>
        </div>
        <div className="login-body d-flex" style={{ gap: "24px" }}>
          <div className="login-l">
            <div className="d-flex">
              <input
                type="text"
                className="login-input"
                placeholder="First Name"
              />
              <input
                type="text"
                className="login-input"
                placeholder="Last Name"
              />
            </div>
            <div className="d-flex">
              <input type="text" className="login-input" placeholder="Email" />
            </div>
            <div className="d-flex">
              <input
                type="text"
                className="login-input"
                placeholder="Password"
              />
            </div>
            <div className="d-flex">
              <input
                type="text"
                className="login-input"
                placeholder="Confirm Password"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center ">
              <button className="btn btn-primary sign-native">
                {" "}
                Create Account
              </button>
              <div className="gone">
            <span className="login-span"></span>or,
            <span> Sign In</span>
          </div>

            </div>
            <div>
              <button
                className="sign-btn d-flex justify-content-center align-items-center"
                style={{ gap: "5px" }}
              >
                <img src={fb} alt="" /> Sign in with Google
              </button>
            </div>
            <div>
              <button
                className="sign-btn d-flex justify-content-center align-items-center"
                style={{ gap: "5px" }}
              >
                <img src={goog} alt="" /> Sign in with Facebook
              </button>
            </div>
          </div>
          <div className="login-r">
            <img src={ill} alt="" />
            <p className="login-cond">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
     <div> <p className="login-cond gone">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
            </div>
    </div>
    </div>
  );
}
export default Login;
