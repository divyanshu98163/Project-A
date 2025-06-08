import React from "react";

function Brokerage() {
  return (
    <div className="row p-5 mt-10 text-center">
      <>
        <nav>
          <div className="nav nav-tabs " id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <h2>Equity</h2>
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              <h2>Currency</h2>
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              <h2>Commodity</h2>
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <div className="row p-5 mt-5 text-center" style={{ border: "1px solid black" }}>
                <div className="row "style={{ color: "darkslategray", fontWeight: "bold", borderBottom: "1px solid black" }}>
              <div className="col-2 p-3 "> <p></p></div>
              <div className="col-2 p-3 "> <p>Equity delivery</p></div>
              <div className="col-2 p-3 "> <p>Equity intraday</p></div>
              <div className="col-2 p-3 "> <p>EF&O - Futures</p></div>
              <div className="col-2 p-3"> <p>F&O - Options</p></div>
              </div>
              {/* 1st row */}
              <div className="row  " >
              <div className="col-2 p-3 "> <p>Brokerage</p></div>
              <div className="col-2 p-3 "> <p>Zero Brokerage</p></div>
              <div className="col-2 p-3 "> <p>0.03% or Rs. 20/executed order whichever is lower</p></div>
              <div className="col-2 p-3 "> <p>0.03% or Rs. 20/executed order whichever is lower</p></div>
              <div className="col-2 p-3"> <p>Flat Rs. 20 per executed order</p>
              </div>
              </div>

                {/* 2nd row */}
                <div className="row " style={{ backgroundColor: "lightgray" }}>
                <div className="col-2 p-3 "> <p>STT/CTT</p></div>
              <div className="col-2 p-3 "> <p>0.1% on buy & sell</p></div>
              <div className="col-2 p-3 "> <p>0.025% on the sell side</p></div>
              <div className="col-2 p-3 "> <p>0.02% on the sell side</p></div>
              <div className="col-2 p-3"> <p> 0.0125% of the intrinsic value on options that are bought and exercised <br />
               0.1% on sell side (on premium)
</p></div>
</div>
                {/* 3rd row */}
            <div className="row " >
              <div className="col-2 p-3 "> <p>Transaction charges</p></div>
              <div className="col-2 p-3 "> <p>NSE: 0.00297%
BSE: 0.00375%</p></div>
              <div className="col-2 p-3 "> <p>NSE: 0.00297%
BSE: 0.00375%</p></div>
              <div className="col-2 p-3 "> <p>NSE: 0.00173%
BSE: 0</p></div>
              <div className="col-2 p-3"> <p>NSE: 0.03503% (on premium)
BSE: 0.0325% (on premium)</p></div>
            </div>
                {/* 4th row */} 

            <div className="row " style={{ backgroundColor: "lightgray" }}>
              <div className="col-2 p-3 "> <p>GST</p></div>
              <div className="col-2 p-3 "> <p>18% on (brokerage + SEBI charges + transaction charges)</p></div>
              <div className="col-2 p-3 "> <p>18% on (brokerage + SEBI charges + transaction charges)</p></div>
              <div className="col-2 p-3 "> <p>18% on (brokerage + SEBI charges + transaction charges)</p></div>
              <div className="col-2 p-3"> <p>18% on (brokerage + SEBI charges + transaction charges)</p></div>
            </div>

                {/* 5th row */}
            <div className="row " >
              <div className="col-2 p-3 "> <p>SEBI charges</p></div>
              <div className="col-2 p-3 "> <p>₹10 / crore</p></div>
              <div className="col-2 p-3 "> <p>₹10 / crore</p></div>
              <div className="col-2 p-3 "> <p>₹10 / crores</p></div>
              <div className="col-2 p-3"> <p>₹10 / crore</p></div>
            </div>
                {/* 6th row */} 
              <div className="row " style={{ backgroundColor: "lightgray" }}>
              <div className="col-2 p-3 "> <p>Stamp charges	</p></div>
              <div className="col-2 p-3 "> <p>0.015% or ₹1500 / crore on buy side</p></div>
              <div className="col-2 p-3 "> <p>0.003% or ₹300 / crore on buy side</p></div>
              <div className="col-2 p-3 "> <p>0.002% or ₹200 / crore on buy side</p></div>
              <div className="col-2 p-3"> <p>0.003% or ₹300 / crore on buy side</p></div>
              </div>

            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <div className="row p-5 mt-5 text-center" style={{ border: "1px solid black" }}>
                <div className="row "style={{ color: "darkslategray", fontWeight: "bold", borderBottom: "1px solid black" }}>
              <div className="col-3 p-3 "> <p></p></div>
              <div className="col-4 p-3 "> <p>Currency futures</p></div>
              <div className="col-4 p-3 "> <p>Currency options</p></div>
              </div>

              {/* 1st row */}
              <div className="row">
                <div className="col-3 p-2 "> <p>Brokerage</p></div>
              <div className="col-4 p-2 "> <p>0.03% or ₹ 20/executed order whichever is lower</p></div>
              <div className="col-4 p-2 "> <p>₹ 20/executed order</p></div>
              </div>
                {/* 2st row */}
              <div className="row" style={{ backgroundColor: "lightgray" }}>
                <div className="col-3 p-3 "> <p>STT/CTT</p></div>
              <div className="col-4 p-3 "> <p>No STT</p></div>
              <div className="col-4 p-3 "> <p>No STT</p></div>
              </div>
                {/* 3rd row */}
              <div className="row">
                <div className="col-3 p-3 "> <p>Transaction charges</p></div>
              <div className="col-4 p-3 "> <p>NSE: 0.00035% <br></br>
BSE: 0.00045%</p></div>
              <div className="col-4 p-3 "> <p>NSE: 0.0311%
BSE: 0.001%</p></div>
              </div>
              {/* 4th row */}
              <div className="row " style={{ backgroundColor: "lightgray" }}>
                <div className="col-3 p-3 "> <p>GST</p></div>
              <div className="col-4 p-3 "> <p>18% on (brokerage + SEBI charges + transaction charges)</p></div>
              <div className="col-4 p-3 "> <p>18% on (brokerage + SEBI charges + transaction charges)</p></div>
              </div>
              {/* 5th row */}
              <div className="row">
                <div className="col-3 p-3 "> <p>SEBI charges</p></div>
              <div className="col-4 p-3 "> <p>	₹10 / crore</p></div>
              <div className="col-4 p-3 "> <p>	₹10 / crore</p></div>
              </div>
              {/* 6th row */}
              <div className="row" style={{ backgroundColor: "lightgray" }}>
                <div className="col-3 p-3 "> <p>Stamp charges</p></div>
              <div className="col-4 p-3 "> <p>0.0001% or ₹10 / crore on buy side</p></div>
              <div className="col-4 p-3 "> <p>0.0001% or ₹10 / crore on buy side</p></div>
              </div>
              
           </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            <div className="row p-5 mt-5 text-center" style={{ border: "1px solid black" }}>
                <div className="row "style={{ color: "darkslategray", fontWeight: "bold", borderBottom: "1px solid black" }}>
              <div className="col-3 p-3 "> <p></p></div>
              <div className="col-4 p-3 "> <p>Commodity futures</p></div>
              <div className="col-4 p-3 "> <p>Commodity options</p></div>
              </div>

              {/* 1st row */}
              <div className="row">
                <div className="col-3 p-2 "> <p>Brokerage</p></div>
              <div className="col-4 p-2 "> <p>0.03% or ₹ 20/executed order whichever is lower</p></div>
              <div className="col-4 p-2 "> <p>₹ 20/executed order</p></div>
              </div>
                {/* 2st row */}
              <div className="row" style={{ backgroundColor: "lightgray" }}>
                <div className="col-3 p-3 "> <p>STT/CTT</p></div>
              <div className="col-4 p-3 "> <p>0.01% on sell side (Non-Agri)</p></div>
              <div className="col-4 p-3 "> <p>0.05% on sell side</p></div>
              </div>
                {/* 3rd row */}
              <div className="row">
                <div className="col-3 p-3 "> <p>Transaction charges</p></div>
              <div className="col-4 p-3 "> <p>MCX: 0.0021% <br></br>
NSE: 0.0001%%</p></div>
              <div className="col-4 p-3 "> <p>MCX: 0.0418% <br></br>
NSE: 0.001%</p></div>
              </div>
              {/* 4th row */}
              <div className="row " style={{ backgroundColor: "lightgray" }}>
                <div className="col-3 p-3 "> <p>GST</p></div>
              <div className="col-4 p-3 "> <p>18% on (brokerage + SEBI charges + transaction charges)</p></div>
              <div className="col-4 p-3 "> <p>18% on (brokerage + SEBI charges + transaction charges)</p></div>
              </div>
              {/* 5th row */}
              <div className="row">
                <div className="col-3 p-3 "> <p>SEBI charges</p></div>
              <div className="col-4 p-3 "> <p>	Agri:
₹1 / crore <br></br>Non-agri:
₹10 / crore </p></div>
              <div className="col-4 p-3 "> <p>	₹10 / crore</p></div>
              </div>
              {/* 6th row */}
              <div className="row" style={{ backgroundColor: "lightgray" }}>
                <div className="col-3 p-3 "> <p>Stamp charges</p></div>
              <div className="col-4 p-3 "> <p>0.002% or ₹200 / crore on buy side</p></div>
              <div className="col-4 p-3 "> <p>0.003% or ₹300 / crore on buy side</p></div>
              </div>
              
           </div>
            
          </div>
        </div>
      </>
    </div>
  );
}

export default Brokerage;
