import { useState, useEffect } from "react";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Slider,
} from "@mui/material";

const ProductFilter = ({ onFilter }) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 80000]);

  useEffect(() => {
    onFilter({ category, priceRange });
  }, [category, priceRange]);

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {/* Category Dropdown */}
      <FormControl variant="outlined" sx={{ minWidth: 150 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Fashion">Fashion</MenuItem>
          <MenuItem value="Grocery">Grocery</MenuItem>
        </Select>
      </FormControl>

      {/* Price Range Slider */}
      <div style={{ width: "200px" }}>
        <InputLabel>Price Range</InputLabel>
        <Slider
          value={priceRange}
          onChange={(_, newValue) => setPriceRange(newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={80000}
        />
      </div>
    </div>
  );
};
export default ProductFilter;
