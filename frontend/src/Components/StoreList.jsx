import React from 'react';
import { Card, Box, CardContent, Typography, CircularProgress, Button, Grid2 as Grid } from '@mui/material';
import { useApi } from '../context/ApiContext';
import { useNavigate } from "react-router-dom";

const StoreList = () => {
    const { stores, loading } = useApi();
    const navigate = useNavigate();
  
    if (loading) return <CircularProgress />;
  
    return (
<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Stores
      </Typography>
      <Grid container spacing={3} sx={{margin:"auto"}}>
        {stores.map((store) => (
          <Grid item key={store._id} xs={12} sm={6} md={3}>
            <Card
              sx={{
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {store.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {store.location}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => navigate(`/store/${store._id}`)}
                >
                  View Products
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    );
  };
  
  export default StoreList;






