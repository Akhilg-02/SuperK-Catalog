import { useState, useEffect } from "react";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Slider,
  Grid2 as Grid,
  Box 
} from "@mui/material";

const ProductFilter = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 80000]);

  useEffect(() => {
    onFilter({ category, priceRange });
  }, [category, priceRange]);

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {/* Category Dropdown */}
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth variant="outlined" sx={{ minWidth: 180 }}>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={(e) => setCategory(e.target.value)} label="Category">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Fashion">Fashion</MenuItem>
              <MenuItem value="Grocery">Grocery</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Price Range Slider */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ width: "100%", paddingX: 2 }}>
            <InputLabel sx={{ mb: 1 }}>Price Range</InputLabel>
            <Slider
              value={priceRange}
              onChange={(_, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={80000}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProductFilter;
