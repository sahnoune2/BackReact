import axios from "axios";
const apiUrl = "http://localhost:5000";

export const getProducts = async () => {
  try {
    const response = await axios.get(apiUrl + "/list");
    console.log(response.data);
    return response.data.allProducts;
  } catch (error) {
    console.log("error");
    throw error;
  }
};

export const getOneProduct = async ({ params }) => {
  try {
    const response = await axios.get(`${apiUrl}/One/${params.id}`);
    console.log(response.data);
    return {
      productFound: response.data.oneProduct,
      image: response.data.oneProduct.images[0],
    };
  } catch (error) {
    console.log("error");
    throw error;
  }
};


// this one to get the current user logged in 
export const getCurrent = async () => {
  
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };

  try {
    const response = await axios.get(`${apiUrl}/auth`, config);
    console.log(response);
    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
