import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Button } from '@mui/material';
import { useApi } from '../context/ApiContext';
import { useNavigate } from "react-router-dom";

const StoreList = () => {
    const { stores, loading } = useApi();
    const navigate = useNavigate();
  
    if (loading) return <CircularProgress />;
  
    return (
        <div>
        <h2>Stores</h2>
        {stores.map((store) => (
          <Card key={store._id} sx={{ margin: 2, padding: 2 }}>
            <CardContent>
              <Typography variant="h6">{store.name}</Typography>
              <Typography>Location: {store.location}</Typography>
              <Button variant="contained" onClick={() => navigate(`/store/${store._id}`)}>
                View Products
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  
  export default StoreList;