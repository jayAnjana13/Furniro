import { createContext, useState, useEffect } from "react";
import axios from "axios"; // Make sure Axios is installed
import { shop_products } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [product_list, setProduct_list] = useState([]);

  const url = "http://localhost:5000"; // Replace with your backend URL

  // Set product list to the hardcoded data
  useEffect(() => {
    setProduct_list(shop_products);
  }, []);

  // Add to cart
  const addToCart = async (itemId) => {
    setCartItems((prevCart) => {
      const updatedCart = {
        ...prevCart,
        [itemId]: prevCart[itemId] ? prevCart[itemId] + 1 : 1,
      };
      return updatedCart;
    });
    await axios.post(url + "/api/cart/add", { itemId });
  };

  // Remove from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId]; // Remove the item completely if quantity is 0
      }
      return updatedCart;
    });
    await axios.post(url + "/api/cart/remove", { itemId });
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      // Log itemId to verify the value being compared
      console.log("Looking for product with ID:", itemId);

      // Ensure correct comparison by converting both itemId and _id to string
      const product = product_list.find((p) => String(p._id) === itemId);

      if (product) {
        console.log(`Found product: ${product.name}`);
        totalAmount += product.price * cartItems[itemId];
      } else {
        console.warn(`Product with ID ${itemId} not found.`);
      }
    }

    return totalAmount;
  };

  //fetching productList from database
  const fetchProductList = async () => {
    const response = await axios.get(url + "/api/product/list");
    setProduct_list(response.data.data);
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  const contextValue = {
    product_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
