import React from "react";

function Hero() {
  return (
    <div>
      <div className="text-center mt-5">
        <h1>Open a free demat and trading account online</h1>
        <p>
          <h5 style={{ color: "#6c757d", fontSize: "1.2rem" }} className="mt-3">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h5>
        </p>
      </div>

      <div className="row text-center mt-5">
        <div className="col-6 text-center mt-5">
          <img
            style={{ resize: "100%", width: "70%" }}
            src="	https://zerodha.com/static/images/account_open.svg"
          />
        </div>
        <div className="col-5 mt-5">
          <div className=" mt-5 text-xl-start">
            <h1 className="text-xl-start">Signup now</h1>
          <p>
            <h5
              style={{ color: "#6c757d", fontSize: "1.2rem" }}
              className="mt-3"
            >
              Or track your existing application
            </h5>
          </p>
          </div>
          
          <form id="open_account_form">
            <div className="row not-around  col-9 mt-4">
              <div className="col-4 mt-4  border ">
                <span className="mobile-prefix ">
                  <img
                    src="https://zerodha.com/static/images/india-flag.svg"
                    alt=""
                  />
                  +91
                </span>
              </div>
              <div className="col-6  mt-4 border ">
                <input
                style={{ border:"none", outline: "none" }}
                  type="number"
                  autoFocus
                  min="1000000000"
                  max="9999999999"
                  name="mobile"
                  id="user_mobile"
                  placeholder="Enter mob no."
                  required
                />
                
              </div>
            </div>
            <div className="open-account-submit-container mt-3 text-xxl-start">
              <button
                type="submit"
                id="open_account_proceed_form"
                className="register-user text-bg-dark "
              >
                Get OTP
                <div className="pulse-container">
                  <div className="pulse-bubble pulse-bubble-1"></div>
                  <div className="pulse-bubble pulse-bubble-2"></div>
                  <div className="pulse-bubble pulse-bubble-3"></div>
                  <div className="pulse-bubble pulse-bubble-4"></div>
                </div>
              </button>
            </div>
          </form>
          <p className="text-xxl-start mt-4">By proceeding, you agree to the Zerodha <a href="/terms">terms</a> & <a href="/privacy">privacy policy</a>

</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
