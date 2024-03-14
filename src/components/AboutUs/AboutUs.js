import React from "react";
import one from "../../assets/one.png";
const AboutUs = () => {
  return (
    <div className="AboutUs" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img src={one} title="one" alt="one" />
          </div>
          <div className="col-md-5">
            <h2>
              We pride ourselves on making real food from the best ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus aodio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </p>
            <button type="button" class="btn btn-primary">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
