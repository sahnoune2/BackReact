import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

export const ShowOrderPanier = ({ panier }) => {
  const [show, setShow] = useState(false);
  console.log(panier);
  return (
    <>
      <FaEye
        className="p-2 rounded hover:bg-gray-300 cursor-pointer transition"
        onClick={() => setShow(true)}
        style={{ fontSize: "2.2rem", margin: "0 auto" }}
      />

      <div
        className={`${
          show ? "" : "hidden"
        } fixed top-10 left-[50%] w-1/4 h-[300px] bg-black text-white flex flex-col items-center border-2 border-blue-600`}
      >
        <table>
          <tr>
            <td>name</td>
            <td>price</td>
            <td>quantity</td>
          </tr>{" "}
          {panier.map((el) => (
            <tr>
              <td> {el.product.title} </td>
              <td> {el.product.price} </td>
              <td> {el.quantity} </td>
            </tr>
          ))}
        </table>

        <div>
          <button onClick={() => setShow(false)}>close</button>
        </div>
      </div>
    </>
  );
};
