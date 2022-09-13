import React,{useState} from "react";
import { Container, Row } from "react-bootstrap";
import Products from "./Products";
import "./Main.scss";

function Main(props) {

  return (
    <div>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {props.shoes.map((shoe, index) => {
            return (
              <Products
                shoes={props.shoes[index]}
                shoe={"shoes" + [index + 1]}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Main;
