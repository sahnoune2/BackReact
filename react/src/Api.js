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
    return {productFound:response.data.oneProduct,image:response.data.oneProduct.images[0]};
  } catch (error) {
    console.log("error");
    throw error;
  }
};
