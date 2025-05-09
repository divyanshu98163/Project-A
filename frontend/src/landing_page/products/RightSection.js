<<<<<<< HEAD
import React from "react";

function RightSection({
  imageURL,
  Productname,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-6 p-5 mt-5">
          <h1>{Productname}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn more
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
      </div>
      
    </div>
  );
}

export default RightSection;
=======
import React from "react";

function RightSection({
  imageURL,
  Productname,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        
        <div className="col-6 p-5 mt-5">
          <h1>{Productname}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn more
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
      </div>
      
    </div>
  );
}

export default RightSection;
>>>>>>> 82bf216ab9bc790b4bb5365a51dc89140e211d92
