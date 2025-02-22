import React from "react";
import { Dialog, Divider, Box, DialogTitle, DialogContent, Typography, Button } from "@mui/material";

const ProductDetailsDialog = ({ open, onClose, product }) => {

  if (!product) return null;

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      sx={{
        "& .MuiPaper-root": {
          borderRadius: 3, 
          boxShadow: 8, 
          padding: 2,
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", textAlign: "center", color: "#1976d2" }}>
        {product.name}
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2, textAlign: "center", color: "text.secondary" }}>
          {product.description}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Price: ₹{product.price}
          </Typography>
          <Typography variant="body2" sx={{ color: "green", fontWeight: "bold" }}>
            Availability: In Stock
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button onClick={onClose} variant="contained" color="primary" sx={{ borderRadius: 2, px: 4 }}>
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;


