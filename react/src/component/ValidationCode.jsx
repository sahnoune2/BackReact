import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ValidationCode = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/addUser", {
        code: code,
      });

      console.log(response);

      if (response.status === 200) {
        toast.success("account created");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="w-full h-screen">
      <input
        onChange={(e) => setCode(e.target.value)}
        className="border-2 border-blue-700"
        type="text"
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};
