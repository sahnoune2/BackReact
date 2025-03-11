import axios from "axios";
import React, { useState } from "react";
import { BiHandicap } from "react-icons/bi";
import { CiTrash } from "react-icons/ci";
import { toast } from "react-toastify";
import { getProducts } from "../../Api";
import Products from "../Products";
import ProductsDash from "./ProductsDash";

function Modals({ id, revalidate }) {
  const [show, setShow] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete("http://localhost:5000/del/" + id);
      revalidate(); //refresh the useloader
      if (response.status === 200) {
        toast.success("product deleted ");
      }
    } catch (error) {
      toast.error("failed to delete");
      console.log(error);
    }
    setShow(false);
  };

  return (
    <>
      <CiTrash
        className="p-2 rounded hover:bg-gray-300 cursor-pointer transition"
        onClick={() => setShow(true)}
        style={{ fontSize: "2.2rem", margin: "0 auto" }}
      />

      <div
        className={`${
          show ? "" : "hidden"
        } fixed top-10 left-[50%] w-1/4 h-[300px] bg-black text-white flex flex-col items-center border-2 border-blue-600`}
      >
        <p>are you sure?</p>
        <div>
          <button onClick={() => handleDelete()}>yes</button>
          <button onClick={() => setShow(false)}>no</button>
        </div>
      </div>
    </>
  );
}

export default Modals;
