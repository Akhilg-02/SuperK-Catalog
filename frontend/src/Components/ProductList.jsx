import { useEffect, useState, useCallback } from "react";
import { useApi } from "../context/ApiContext";
import ProductFilter from "./ProductFilter";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import ProductDetailsDialog from "./ProductDetailsDialog";

const ProductList = () => {
  const { products, loading, fetchProductsByStore } = useApi();
  const { storeId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: "",
    priceRange: [0, 80000],
  });

  const [selectedProduct, setSelectedProduct] = useState(null);


    // Fetch products for the selected store
    useEffect(() => {
      if (storeId) fetchProductsByStore(storeId);
    }, [storeId]);

  useEffect(() => {
    let filtered = products.filter((product) => {
      return (
        (filters.category ? product.category === filters.category : true) && 
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
      );
    });

    setFilteredProducts(filtered);
  }, [products, filters]);



  const handleFilter = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <div>
      <h2>Products</h2>
      <ProductFilter onFilter={handleFilter} />
      {
      filteredProducts.length > 0 ?
       (
        filteredProducts.map((product) => (
          <Card 
          key={product._id} 
          sx={{ margin: 2, padding: 2 , cursor: "pointer"}}
          onClick={() => setSelectedProduct(product)}
          >
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography>{product.description}</Typography>
              <Typography>Price: ${product.price}</Typography>
              <Typography>Category: {product.category}</Typography>
            </CardContent>
          </Card>
        ))
      ) 
      :
       (
        <Typography>No products found.</Typography>
      )
      }
      <ProductDetailsDialog 
        open={Boolean(selectedProduct)} 
        onClose={() => setSelectedProduct(null)} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default ProductList;
