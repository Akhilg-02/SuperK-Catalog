import { useEffect, useState, useCallback } from "react";
import { useApi } from "../context/ApiContext";
import ProductFilter from "./ProductFilter";
import { useParams } from "react-router-dom";
import { Card, Box, CardContent, Typography, CircularProgress, Grid2 as Grid } from "@mui/material";
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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 3 }}>
    <Typography variant="h4" gutterBottom>
      Products
    </Typography>

    {/* Filter Component */}
    <ProductFilter onFilter={handleFilter} />

    {/* Product Cards Grid */}
    <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "1200px", marginTop: 2 }}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                padding: 3,
                boxShadow: 4,
                borderRadius: 3,
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 8,
                },
              }}
              onClick={() => setSelectedProduct(product)}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography sx={{ fontWeight: "bold", mt: 1 }}>Price: Rs {product.price}</Typography>
                <Typography variant="caption" color="text.secondary">
                  Category: {product.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography sx={{ mt: 3 }} variant="h6" color="text.secondary">
          No products found.
        </Typography>
      )}
    </Grid>

    {/* Product Details Dialog */}
    <ProductDetailsDialog open={Boolean(selectedProduct)} onClose={() => setSelectedProduct(null)} product={selectedProduct} />
  </Box>
  );
};

export default ProductList;

