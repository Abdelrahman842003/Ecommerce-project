import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCard } from "../../redux/cartSlice";
import Header1 from "../Header/header1/Header1";
import Header2 from "../Header/header2/Header2";
import { useTheme } from "@mui/material";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, pro) => {
    acc += pro.price * pro.quantity;
    return acc;
  }, 0);
  const theme = useTheme();
  return (
    <div className="parent_cart">
      <Header1 />
      <Header2 />
      <div className="container_cart">
        <div className="header">
          <button
            onClick={() => {
              dispatch(clear(cart));
            }}
            style={{ marginBottom: 20 }}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            Clear Cart
          </button>{" "}
          <table
            className="table table-hover"
            style={{ backgroundColor: theme.palette.background.main }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: theme.palette.background.main,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  scope="col"
                >
                  ID
                </th>
                <th
                  style={{
                    backgroundColor: theme.palette.background.main,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  scope="col"
                >
                  Title
                </th>
                <th
                  style={{
                    backgroundColor: theme.palette.background.main,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  scope="col"
                >
                  Price
                </th>
                <th
                  style={{
                    backgroundColor: theme.palette.background.main,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  scope="col"
                >
                  Quantity
                </th>
                <th
                  style={{
                    backgroundColor: theme.palette.background.main,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  scope="col"
                >
                  Image
                </th>
                <th
                  style={{
                    backgroundColor: theme.palette.background.main,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  scope="col"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cart) => {
                return (
                  <tr key={cart.id}>
                    <th
                      style={{
                        backgroundColor: theme.palette.background.main,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      scope="row"
                    >
                      {cart.id}
                    </th>
                    <td
                      style={{
                        backgroundColor: theme.palette.background.main,
                        fontWeight: "bold",
                      }}
                    >
                      {cart.title}
                    </td>
                    <td
                      style={{
                        backgroundColor: theme.palette.background.main,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      className="tdPrice"
                    >
                      {cart.price}
                    </td>
                    <td
                      style={{
                        backgroundColor: theme.palette.background.main,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                      className="tdPrice"
                    >
                      {cart.quantity}
                    </td>
                    <td
                      style={{
                        backgroundColor: theme.palette.background.main,
                      }}
                    >
                      {
                        <img
                          src={cart.image}
                          alt={cart.title}
                          style={{
                            width: "100px",
                            backgroundColor: theme.palette.background.main,textAlign:"center"
                          }}
                        />
                      }
                    </td>
                    <td
                      style={{
                        backgroundColor: theme.palette.background.main,textAlign:"center"
                      }}
                    >
                      <button
                        style={{
                          marginRight: 10,
                        }}
                        onClick={() => {
                          dispatch(deleteFromCard(cart));
                        }}
                        type="button"
                        class="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <th
                  style={{
                    backgroundColor: theme.palette.background.main,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  scope="row"
                >
                  Total Price
                </th>

                <td
                  style={{
                    backgroundColor: theme.palette.background.main,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                  colSpan="5"
                >
                  {totalPrice.toFixed(2)}$
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>{" "}
    </div>
  );
}
