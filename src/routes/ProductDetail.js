import React from "react";
import styles from "./ProductDetail.module.scss"

function ProductDetail() {
  return (
    <div className="container">
      <div className={styles.row}>
        <div className={styles.col}>
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className={styles.col}>
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
