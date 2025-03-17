import React, { useState } from "react";
import {
  Link,
  useLoaderData,
  useRevalidator,
  useRouteLoaderData,
} from "react-router-dom";
import Modals from "./Modals";
import { ShowOrderPanier } from "./ShowOrderPanier";
import { FaEye } from "react-icons/fa";

export const Orders = () => {
  const revalidate = useRevalidator();
  const { delivery, online } = useLoaderData();
  const [method, setMethod] = useState("delivery");
  console.log(online);
  console.log(method);
  return (
    <div style={{ width: "100%" }}>
      <select onChange={(e) => setMethod(e.target.value)}>
        <option value="delivery"> delivery</option>
        <option value="online payment"> online payment</option>
      </select>
      <>
        {/* component */}
        {/* This is an example component */}
        <div className=" ">
          <div className="p-4 w-[100%] bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                All orders
              </h3>
              <div style={{ display: "flex", gap: "2rem" }}>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </a>
              </div>
            </div>
            <div>
              {method === "delivery"
                ? delivery.map((order, index) => (
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="divide-y divide-gray-200 dark:divide-gray-700"
                      >
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {order.userID.name}
                              </p>
                              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {order.userID.address}
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              status :{order.status}
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              date :
                              {new Date(order.date).toLocaleDateString(
                                "fr-FR",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              Price :${order.total}
                            </div>
                            <ShowOrderPanier panier={order.panier} />
                          </div>
                        </li>
                      </ul>
                    </div>
                  ))
                : online.data.map((order) => (
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="divide-y divide-gray-200 dark:divide-gray-700"
                      >
                        <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {order.billing_details.name}
                              </p>
                              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {order.billing_details.address.country}
                              </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              status :{order.status}
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              Price :${order.amount / 100}
                            </div>
                            <a href={order.receipt_url} target="_blank">
                              {" "}
                              <FaEye />
                            </a>
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
};
