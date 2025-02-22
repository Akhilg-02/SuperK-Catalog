import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/`)}
          variant="h6"
        >
          Store Catalog
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
