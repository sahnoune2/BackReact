import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiTrash } from "react-icons/ci";
import { Link, useLoaderData, useRevalidator } from "react-router-dom";
import { toast } from "react-toastify";
const apiUrl = "http://localhost:5000";

function TR({ count, product, total, setTotal, revalidate, panier, key }) {
  const [quantity, setQuantity] = useState(count);
  const [newPanier, setPanier] = useState(panier);

  const deleteFromPanier = async (id) => {
    console.log(id);
    setPanier(newPanier.filter((el) => el.product._id !== id));
    try {
      const response = await axios.delete(
        `${apiUrl}/deleteOne/${id}`,

        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 200) {
        revalidate();
        toast.success("product deleted successfully from panier");

        setTotal(
          newPanier.reduce((acc, el) => acc + el.product.price * el.quantity, 0)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div key={key} className="mx-auto w-full   lg:max-w-2xl xl:max-w-4xl">
      <div className="space-y-6  ">
        <div className="rounded-lg border w-[100%] border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <Link to={"/prod/" + product.id}>
              <img
                className="h-20 w-20 dark:hidden"
                src={product.images[0]}
                alt="imac image"
              />
            </Link>

            <div className="flex items-center justify-between md:order-3 md:justify-end">
              <div className="flex items-center">
                <button
                  type="button"
                  id="decrement-button"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                      setTotal(total - product.price);
                    }
                  }}
                  data-input-counter-decrement="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <span>
                  {" "}
                  <input
                    type="text"
                    id="counter-input"
                    data-input-counter=""
                    className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                    placeholder=""
                    value={quantity}
                    required=""
                  />
                </span>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                    setTotal(total + product.price);
                  }}
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  ${product.price * quantity}
                </p>
              </div>
            </div>
            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:underline dark:text-white"
              >
                {product.title}
              </a>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => deleteFromPanier(product._id)}
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  <svg
                    className="me-1.5 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Cart = ({ cart, setCart }) => {
  const { panier } = useLoaderData();
  const { revalidate } = useRevalidator();
  const [total, setTotal] = useState(0);
  const [method, setMethod] = useState(1);
  const [loading, setLoading] = useState(false);
  console.log(typeof method);

  useEffect(() => {
    setTotal(
      panier.reduce((acc, el) => acc + el.quantity * el.product.price, 0)
    );
  }, [panier]);

  const createOrder = async () => {
    setLoading(true);
    try {
      if (panier.length === 0 || method === null) {
        toast.error("ur panier is empty or choose ur payment method");
      } else if (method == 2) {
        const response = await axios.post(
          `${apiUrl}/addOrder`,
          { panier },
          { withCredentials: true }
        );
        if (response.status === 200) {
          await axios.delete(`${apiUrl}/deleteAll`, { withCredentials: true });
          revalidate();
          toast.success("order has been created,wait for confirmation");
        }
      } else {
        const response = await axios.post(`${apiUrl}/payment`, { panier });

        if (response.status === 200) {
          window.location.href = response.data.url;
          await axios.delete(`${apiUrl}/deleteAll`, { withCredentials: true });
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("sth went wrong while creating ur order");
      console.log(error);
    }
  };

  // useEffect(() => {
  //   console.log("Cart component: Received cart:", cart);
  // }, [cart]);

  // const change = (index) => {
  //   const updated = [...cart];
  //   updated.splice(index, 1);
  //   setCart(updated);
  // };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6  lg:flex lg:items-start xl:gap-8 ">
          <div style={{ width: "70%" }}>
            {panier.map((el, index) => (
              <TR
                key={el.product._id}
                count={el.quantity}
                product={el.product}
                setTotal={setTotal}
                total={total}
                revalidate={revalidate}
                panier={panier}
              />
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${total}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${total * 0.002}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      ${total * 0.01}
                    </dd>
                  </dl>
                </div>
                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    ${total}
                  </dd>
                </dl>
              </div>
              <div>
                <span>select ur payment method</span>
                <select
                  defaultValue={1}
                  onChange={(e) => setMethod(e.target.value)}
                >
                  <option value={1}>with credit card </option>
                  <option value={2}> delivery</option>
                </select>
              </div>
              <button
                disabled={loading}
                onClick={createOrder}
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? "processing...." : "Proceed to Checkout"}
              </button>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  or{" "}
                </span>
                <Link
                  to={"/products"}
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    placeholder=""
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div style={{ display: "flex", gap: "10%" }}>
    //   <div style={{ width: "55%", height: "40rem", border: "1px solid red" }}>
    //     <table style={{ width: "100%" }}>
    //       <tr>
    //         <th>image</th>
    //         <th>name</th>
    //         <th>quantity</th>
    //         <th>price</th>
    //         <th>delete</th>
    //       </tr>

    //       {cart.map((product, index) => (
    //         <tr>
    //           <th>
    //             <img
    //               style={{ height: "5rem", margin: "0 auto" }}
    //               src={product.images[0]}
    //               alt=""
    //             />{" "}
    //           </th>
    //           <th> {product.name} </th>
    //           <th> {product.quantity} </th>
    //           <th>{product.price * product.quantity}</th>
    //           <th>
    //             <CiTrash
    //               onClick={() => change(index)}
    //               className="p-2 rounded hover:bg-gray-300 cursor-pointer transition"
    //               style={{ fontSize: "2.2rem", margin: "0 auto" }}
    //             />
    //           </th>
    //         </tr>
    //       ))}
    //     </table>
    //   </div>
    //   <div style={{ width: "35%", height: "40rem", border: "1px solid green" }}>
    //     total price :{" "}
    //     {cart.reduce((acc, el) => acc + el.quantity * el.price, 0)}
    //   </div>
    // </div>
  );
};
