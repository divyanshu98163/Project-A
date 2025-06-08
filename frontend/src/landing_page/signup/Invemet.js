import React from "react";

function Investment() {
  return (
    <div>
      <div className="row text-center mt-5">
        <h2>Investment options with Zerodha demat account</h2>
        <div className="row evenly v-align">
          <div className="col-6 p-2 mt-5">
            <div className="row  v-align pull-right">
              <div className="col-4   mt-5 text-right">
                <img
                  style={{ resize: "100%", width: "100%" }}
                  src="https://zerodha.com/static/images/stocks-acop.svg"
                />
              </div>
              <div className="col-6 p-2 mt-5">
                <h1 className="text-bold">Stocks</h1>
                <p className="text-small  text-muted mt-2">
                  Invest in all exchange-listed securities{" "}
                </p>
              </div>
            </div>
            <div className="row  v-align pull-right">
              <div className="col-4   mt-5 text-right">
                <img
                  style={{ resize: "100%", width: "100%" }}
                  src="https://zerodha.com/static/images/ipo-acop.svg"
                />
              </div>
              <div className="col-6 p-2 mt-5">
                <h1 className="text-bold">IPO</h1>
                <p className="text-small text-muted mt-2">
                  Apply to the latest IPOs instantly via UPI
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 p-2 mt-5">
            <div className="row  v-align ">
              <div className="col-4   mt-5 text-inline">
                <img
                  style={{ resize: "100%", width: "50%" }}
                  src="https://zerodha.com/static/images/mf-acop.svg"
                />
              </div>
              <div className="col-6 p-2 mt-5">
                <h1 className="text-bold">Mutual Funds</h1>
                <p className="text-small text-muted mt-2">
                  Invest in commission-free direct mutual funds
                </p>
              </div>
            </div>
            <div className="row  v-align ">
              <div className="col-4   mt-5 text-right">
                <img
                  style={{ resize: "100%", width: "50%" }}
                  src="https://zerodha.com/static/images/fo-acop.svg"
                />
              </div>
              <div className="col-6 p-2 mt-5">
                <h1 className="text-bold">Futures & Options</h1>
                <p className="text-small text-muted mt-2">
                  Hedge and mitigate market risk through simplified F&O trading
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "30%", margin: "0 auto", }}
        >Explore Investment</button>
      </div>
    </div>
  );
}

export default Investment;
