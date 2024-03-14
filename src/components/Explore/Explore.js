import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import amr1 from "../../assets/amr1.jpg";
import amr2 from "../../assets/amr2.jpg";
import amr3 from "../../assets/amr3.jpg";

const Explore = () => {
  return (
    <div className="explore" id="explore">
      <div className="container">
        <div className="row">
          <h3>Menu</h3>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
            tellus. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={amr1} />
              <Card.Body>
                <Card.Title>Rainbow Vegetable Sandwich</Card.Title>
                <Card.Text>Time: 15 - 20 Minutes | Serves: 1</Card.Text>
                <div>
                  <span>$10.50</span>
                  <span>$11.70</span>
                </div>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={amr2} />
              <Card.Body>
                <Card.Title>Vegetarian Burger</Card.Title>
                <Card.Text>Time: 30 - 45 Minutes | Serves: 1</Card.Text>
                <div>
                  <span>$9.20</span>
                  <span> $10.50</span>
                </div>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src={amr3} />
              <Card.Body>
                <Card.Title>Raspberry Stuffed French Toast</Card.Title>
                <Card.Text>Time: 10 - 15 Minutes | Serves: 1</Card.Text>
                <div>
                  <span>$12.50</span>
                  <span> $13.20</span>
                </div>
                <Button variant="primary">Order Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
