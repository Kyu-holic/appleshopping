import React from "react";
import styles from "./ProductDetail.module.scss";
import { useParams } from "react-router-dom";

function ProductDetail(props) {
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
            width="100%"
          />
        </div>
        <div className={styles.col}>
          <h4 className="pt-5">{newProducts.title}</h4>
          <p>{newProducts.content}</p>
          <p>{newProducts.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
