import React from 'react';

function Hero() {
    return (
        <div >
            <div className="text-center mt-5">
                <h1>Open a free demat and trading account online</h1>
            <p><h5 style={{ color: '#6c757d', fontSize: '1.2rem' }} className="mt-3">Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5></p>
            </div>
            
            <div className='row text-center mt-5'>
                <div className='col-6 text-center mt-5'>
                    <img style={{ resize: "100%", width: "70%" }} src="	https://zerodha.com/static/images/account_open.svg"/>
                </div>
                <div className='col-6 text-center mt-5'>
                    <h1>Signup now</h1>
                    <p><h5 style={{ color: '#6c757d', fontSize: '1.2rem' }} className="mt-3">Or track your existing application</h5></p>
                  <form id="open_account_form">
                    <div className="row not-around">
                      <span className="mobile-prefix">
                        <img src="/static/images/india-flag.svg" alt="" />
                        +91
                        <span className="nri-link" style={{ display: 'none' }}>NRI account? <a href="https://zerodha.com/open-account/nri">Click here</a></span>
                      </span>
                      <input type="number" autoFocus min="1000000000" max="9999999999" name="mobile" id="user_mobile" placeholder="Enter your mobile number" required />
                      <p className="help-text error-message text-12"></p>
                      <input type="hidden" maxLength="25" name="source" id="user_source" value="zerodha" required />
                      <input type="hidden" maxLength="25" name="partner_id" id="user_id" value="ZMPHKJ" required />
                    </div>
                    <div className="open-account-submit-container">
                      <button type="submit" id="open_account_proceed_form" className="register-user">
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
                </div>
            </div>
        </div>
        
    );
}

export default Hero;