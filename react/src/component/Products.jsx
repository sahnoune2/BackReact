import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";

function Products({ list }) {
  const listProducts=useLoaderData()
  console.log("first log:",listProducts);
  return (
    <div className="flex gap-20 flex-wrap px-24">
      {listProducts.map((product) => (
        <Link key={product._id} to={"/prod/" + product._id}>
          <div className=" transition-transform transform hover:scale-105 hover:shadow-lg max-w-sm bg-white border border-blue-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
              <img
                style={{ height: "250px", margin: "0 auto" }}
                className="rounded-t-lg"
                src={product.images[0]}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5
                  style={{ height: "50px", fontSize: "1.2rem" }}
                  className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {product.title}
                </h5>
              </a>
              <p
                style={{ overflowY: "auto", height: "100px" }}
                className="mb-3 font-normal text-gray-700 dark:text-gray-400"
              >
                {product.description}
              </p>
              <p
                style={{
                  overflowY: "auto",
                  height: "50px",
                  fontWeight: "bold",
                }}
                className="mb-3 font-normal text-gray-700 dark:text-gray-400 "
              >
                Price :${product.price}
              </p>

              {/* <ReactStars
                count={10}
                value={product.rating.rate}
                size={24}
                edit={false}
                color2={"#ffd700"}
              /> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
