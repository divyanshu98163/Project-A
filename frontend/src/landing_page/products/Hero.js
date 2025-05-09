import React from "react";

function Hero() {
  return (
    <div className="container text-center mt-5">
      <h1>Tecnology</h1>
      <h3>Sllek ,modern and intuitive treding platform</h3>
      <p>Discover the latest trends and innovations in technology.</p>
      <p className="mt-3">
        Check out our{""}
        <a href="" style={{ textDecoration: "none" }}>
          {" "}
          investing offering{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

        </a>
      </p>
    </div>
  );
}

export default Hero;
