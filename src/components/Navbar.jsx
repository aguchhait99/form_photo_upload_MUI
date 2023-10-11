import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Photo Upload
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Add Data
            </Button>
            <Button color="inherit" component={Link} to="/showdata">
              Show Data
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
