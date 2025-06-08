import React from "react";

function Demat() {
  return (
    <div>
      <div className="row text-center mt-5">
        <h1>Open a free demat and trading account online</h1>
        <div className="row evenly    v-align">
          <div className="col-4 p-10 mt-5 border-left">
            <img
              style={{
                resize: "100%",
                width: "100%",
                paddingLeft: "120px",
                marginLeft: "200px",
              }}
              src="https://zerodha.com/static/images/steps-acop.svg"
            />
          </div>
          <div className="col-8 p-2 mt-5">
            <div className="acop-steps-container">
              <div className="acop-steps text-align: justify;">
              <h2 className="acop-steps-title ">3 simple steps to open an account</h2>

              <p className="acop-steps-text"><button style={{ borderRadius: "100%", width: "30px" }}>01</button> Enter the requested details</p>
              <p className="acop-steps-text "><button style={{ borderRadius: "100%", width: "30px" }}>02</button> Complete e-sign & verification</p>
              <p className="acop-steps-text "><button style={{ borderRadius: "100%", width: "30px" }}>03</button> Start investing!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demat;
