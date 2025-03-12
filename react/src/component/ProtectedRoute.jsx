import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

//protected route ,u wrap dashboard inside it to check if the user who logged in is an admin or client

export const ProtectedRoute = ({ children }) => {
  const connectedUser = useLoaderData();
  const navigate = useNavigate(); // use this to easily navigate between pages
  const [loading, setLoading] = useState(true);

  console.log(connectedUser);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // if loading is true then trigger this condition which will disappear after 2 seconds cuz of the settimeout
  if (loading) {
    return <div className="custom-loader"></div>;
  }

  //its better to always use the ? when getting stuff using axios ,if the user is not admin then u go to home page
  if (connectedUser?.role !== "admin") {
    navigate("/");
  }

  //trigger this when the use is admin
  return <>{children}</>;
};
