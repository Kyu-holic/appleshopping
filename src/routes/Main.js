import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Products from "./Products";
import "./Main.scss";
import axios from "axios";

function Main(props) {
  const [buttonNumber, setButtonNumber] = useState(2);

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
      {buttonNumber === 4 ? null : (
        <button
          onClick={() => {
            axios
              .get(
                `https://codingapple1.github.io/shop/data${buttonNumber}.json`
              )
              .then((result) => {
                const copy = [...props.shoes, ...result.data];
                props.setShoes(copy);
              })
              .catch((error) => {
                console.log(error);
              });
            setButtonNumber(buttonNumber + 1);
          }}
        >
          더보기
        </button>
      )}
    </div>
  );
}

export default Main;
