import React from "react";
import { Col } from "react-bootstrap";

function Products(props) {
  return (
    <Col>
      <div>
        <img
          className="product"
          src={
            "https://codingapple1.github.io/shop/" + props.shoe + ".jpg"
          }
        />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </div>
    </Col>
  );
}

export default Products;
