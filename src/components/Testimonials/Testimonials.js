import React from "react";
import team1 from "../../assets/team-01.png";
import team2 from "../../assets/team-02.png";
import team3 from "../../assets/team-03.png";
import Carousel from "react-bootstrap/Carousel";

const Testimonials = () => {
  return (
    <div className="testimon" id="reviews">
      <div className="container">
        <h3>Testimonials</h3>
        <div className="pepole">
          <Carousel>
            <Carousel.Item>
              <img src={team1} alt="team" title="First slide" />
              <Carousel.Caption>
                <p>
                  "Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live far from the countries Vokalia."
                </p>
                <h3>Simab Dave - Web Designer</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={team2} alt="team" title="sconde slide" />
              <Carousel.Caption>
                <p>
                  "Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live far from the countries Vokalia."
                </p>
                <h3>Johnthan Doe - UX Designer</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={team3} alt="team" title="third slide" />
              <Carousel.Caption>
                <p>
                  "Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live far from the countries Vokalia."
                </p>
                <h3>Maccy Doe - Front End</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
