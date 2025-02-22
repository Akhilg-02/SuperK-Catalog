import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://superk-catalog.onrender.com/api"


const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStores = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_BASE_URL}/stores`);
        setStores(res.data);
      } catch (error) {
        setError("Error fetching stores");
      } finally {
        setLoading(false);
      }
    };
    fetchStores();
  }, []);

  const fetchProductsByStore = async (storeId) => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/products/${storeId}`);
      setProducts(res.data);
    } catch (error) {
      setError("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ stores, products, fetchProductsByStore, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};


export const useApi = () => useContext(ApiContext);


