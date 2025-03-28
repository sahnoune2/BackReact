import axios from "axios";
import React, { useRef } from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

export const EditProduct = () => {
  const { productFound } = useLoaderData();
  console.log(productFound);
  const nameRef = useRef();
  const brandRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  // nameRef.current.value
  const add = async (e) => {
    e.preventDefault();

    if (
      nameRef.current.value === "" ||
      brandRef.current.value === "" ||
      priceRef.current.value === "" ||
      descriptionRef.current.value === ""
    ) {
      toast.error("fill ur form ");
    } else {
      const newProd = {
        title: nameRef.current.value,
        brand: brandRef.current.value,
        price: priceRef.current.value,
        images: imageRef.current.files,

        description: descriptionRef.current.value,

        quantity: 1,
      };

      console.log(newProd);
      try {
        if (newProd.images.length === 0) {
          console.log("anything");
        }

        const imageLinks = [];
        for (let i = 0; i < newProd.images.length; i++) {
          console.log(newProd.images[i]);
          const formData = new FormData();
          formData.append("upload_preset", "seiffff");
          formData.append("file", newProd.images[i]);
          const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dfwxnlpjb/upload",
            formData
          );
          console.log(res);

          imageLinks.push(res.data.secure_url);
        }
        const response = await axios.post("http://localhost:5000/add", {
          ...newProd,
          images: imageLinks,
        });
        console.log(response);
        if (response.status === 200) {
          toast.success("product was added successfully ");
        }
      } catch (error) {
        if (error) {
          console.log(error);
          toast.error("error while adding product");
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center ml-[15rem] mt-[5rem] ">
      <>
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className=" overflow-y-auto overflow-x-hidden    justify-center items-center w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            {/* Modal content */}
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              {/* Modal header */}
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  edit Product
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      defaultValue={productFound.title}
                      ref={nameRef}
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type product name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      stock
                    </label>
                    <input
                      defaultValue={productFound.stock}
                      ref={brandRef}
                      type="text"
                      name="brand"
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Product brand"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                      defaultValue={productFound.price}
                      ref={priceRef}
                      type="number"
                      name="price"
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="$2999"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      image
                    </label>
                    <input
                      ref={imageRef}
                      type="file"
                      accept="image/*"
                      multiple
                      name="price"
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="product's image link"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      defaultValue={productFound.description}
                      ref={descriptionRef}
                      id="description"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Write product description here"
                    />
                  </div>
                </div>
                <button
                  onClick={add}
                  type="submit"
                  className="text-blue-700 inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  edit product
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
