import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Products(props) {
  const navigate = useNavigate();

  return (
    <Col>
      <div>
        <img
          onClick={() => {
            navigate("/detail/" + props.shoes.id);
          }}
          className="product"
          src={"https://codingapple1.github.io/shop/" + props.shoe + ".jpg"}
        />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </div>
    </Col>
  );
}

export default Products;
