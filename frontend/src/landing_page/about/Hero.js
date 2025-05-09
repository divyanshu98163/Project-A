import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-4 text-center">
          {" "}
          We pioneered the discount booking model
          <p>Your journey starts here!</p>
        </h1>
      </div>
      <div className="row p-5 mt-5 border-top text-muted fs-6">
        <div className="col-6">
          We kick-started operations on the 15th of August, 2010 with the goal
          of breaking all barriers that traders and investors face in India in
          terms of cost, support, and technology.<p></p> We named the company
          Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
          barrier.
        </div>
        <div className="col-6">
          In addition, we run a number of popular open online educational and
          community initiatives to empower retail traders and investors.<p></p>
          Rainmatter, our fintech fund and incubator, has invested in several
          fintech startups with the goal of growing the Indian capital markets.
        </div>
      </div>
    </div>
  );
}

export default Hero;
