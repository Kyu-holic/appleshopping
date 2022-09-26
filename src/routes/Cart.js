import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeAge } from "../store";

function Cart() {
  //useSelector는 Redux store를 가져와주는 함수
  let carts = useSelector((state) => {
    return state.cart;
  });

  let test = useSelector((state) => {
    return state.user;
  });
  let dispatch = useDispatch();

  console.log(test);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, index) => {
            return (
              <tr key={index}>
                <td>{carts[index].id}</td>
                <td>{carts[index].name}</td>
                <td>{carts[index].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName(),changeAge())
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
