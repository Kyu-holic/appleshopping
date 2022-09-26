import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductDetail.module.scss";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { Context1 } from "../App";

function ProductDetail(props) {
  let { shoes, stock } = useContext(Context1);

  const [num, setNum] = useState("");
  const [changedTab, setChangedTab] = useState(0);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자만 입력하세요.");
    }
  }, [num]);

  const { id } = useParams();

  const newProducts = props.shoes.find((shoe) => {
    return shoe.id == id;
  });

  return (
    <div className="container">
      <div className={styles.row}>
        <div className={styles.col}>
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              newProducts.id + 1
            }.jpg`}
            width="50%"
          />
        </div>
        <div className={styles.col}>
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <h4 className="pt-5">{newProducts.title}</h4>
          <p>{newProducts.content}</p>
          <p>{newProducts.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
        <div>
          <Nav variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
              <Nav.Link
                eventKey="link-0"
                onClick={() => {
                  setChangedTab(0);
                }}
              >
                상품 상세 설명
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                onClick={() => {
                  setChangedTab(1);
                }}
              >
                교환 안내
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                onClick={() => {
                  setChangedTab(2);
                }}
              >
                찾아오시는 길
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <TabContent changedTab={changedTab} />
        </div>
      </div>
    </div>
  );
}

function TabContent({ changedTab }) {
  if (changedTab === 0) {
    return <div className={styles.start}>내용0</div>;
  } else if (changedTab === 1) {
    return <div className={styles.start}>내용1</div>;
  } else if (changedTab === 2) {
    return <div className={styles.start}>내용2</div>;
  }
}

function TimeModal() {
  return <div className="alert alert-warning">2초 이내 구매시 할인</div>;
}

export default ProductDetail;
