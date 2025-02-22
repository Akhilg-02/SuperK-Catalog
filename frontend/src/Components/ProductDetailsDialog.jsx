import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";

const ProductDetailsDialog = ({ open, onClose, product }) => {

  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="h6">Price: ${product.price}</Typography>
        <Typography variant="body2">
          Availability: {product.available ? "In Stock" : "Out of Stock"}
        </Typography>
        <Button onClick={onClose} sx={{ mt: 2 }} variant="contained" color="primary">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;
