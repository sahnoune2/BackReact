import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useRevalidator } from "react-router-dom";
import ReactStars from "react-stars";

import { CiTrash } from "react-icons/ci";
import { toast } from "react-toastify";
import Modals from "./Modals";

function ProductsDash({ cart, setCart }) {
  const list = useLoaderData();

  const { revalidate } = useRevalidator(); //refresh the useloaderdata

  // const change = (index) => {
  //   const updated = [...list];
  //   updated.splice(index, 1);
  //   const cartUpdated = [...cart];
  //   const final = cartUpdated.filter((el) => list[index].id !== el.id);

  //   setCart(final);
  // };

  return (
    <div style={{ width: "100%" }}>
      <>
        {/* component */}
        {/* This is an example component */}
        <div className=" ">
          <div className="p-4 w-[100%] bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                All products
              </h3>
              <div style={{ display: "flex", gap: "2rem" }}>
                {" "}
                <Link
                  to={"/admin/form"}
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  ADD new product
                </Link>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </a>
              </div>
            </div>
            <div>
              {list.map((product, index) => (
                <div className="flow-root">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <img
                            className="w-16 h-16 rounded-full"
                            src={product.images[0]}
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {product.title}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {product.description}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          Price :${product.price}
                        </div>
                        <Modals revalidate={revalidate} id={product._id} />
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
//  <Link to={"/prod/" + product.id}></Link>;

export default ProductsDash;

//  <tr>
//       <th>
//         <Link to={"/prod/" + product.id}>
//           <img
//             style={{ height: "70px", display: "block", margin: "0 auto" }}
//             className="rounded-t-lg"
//             src={product.images[0]}
//             alt=""
//           />
//         </Link>
//       </th>

//       <th href="#">
//         <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
//           {product.name}
//         </h5>
//       </th>
//       <th
//         style={{}}
//         className="mb-3 font-normal text-gray-700 dark:text-gray-400"
//       >
//         {product.description}
//       </th>
//       <th
//         style={{}}
//         className="mb-3 font-normal text-gray-700 dark:text-gray-400"
//       >
//         Price :${product.price}
//       </th>
//       <th>
//         <CiTrash
//           className="p-2 rounded hover:bg-gray-300 cursor-pointer transition"
//           onClick={() => change(index)}
//           style={{ fontSize: "2.2rem", margin: "0 auto" }}
//         />
//       </th>
//     </tr>
