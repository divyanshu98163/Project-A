import React from 'react';

function Charges() {
    return (  
        <div className="row p-5 mt-5 text-center">
            <div className="col-4 p-5 ">
                <img style={{ resize: "100%", width: "50%" }} src="https://zerodha.com/static/images/pricing-eq.svg" alt="Brokerage" />
                <h2>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 p-5 ">
                <img style={{ resize: "100%", width: "50%" }} src="https://zerodha.com/static/images/other-trades.svg" alt="Brokerage" />
                <h2>Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4 p-5">
                <img style={{ resize: "100%", width: "50%" }} src="https://zerodha.com/static/images/pricing-eq.svg" alt="Brokerage" />
                <h2>Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    );
}

export default Charges;