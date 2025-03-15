import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Badge,Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import CustomButton from "../components/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/Logo.png";
import BasicModal from "../components/Modal";
import { useSelector } from "react-redux";
interface Props {
  window?: () => Window;
}

interface NavItem {
  key: number;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { key: 1, label: "Home", path: "/home" },
  { key: 2, label: "About", path: "/about" },
  { key: 3, label: "Contact", path: "/contact" },
];

const drawerWidth = 250;

const Navbar: React.FC<Props> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const cart = useSelector((state:any) => state.cart.cart);
  const totalQuantity = cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/home">
        <img src={logo} alt="logo" style={{ width: "100%" }} />
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton>
              <Link
                to={item.path}
                style={{
                  color: "#a70c0c",
                  fontWeight: "500",
                  fontSize: "18px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  margin: "7px 0px",
                }}
              >
                {item.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box mb={1}>
        <IconButton
          onClick={()=>setOpen(true)}
          sx={{
            width: "50px", 
            height: "50px",
            display:'flex',
            justifyContent:'flex-start',
            marginLeft:"15px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <Badge
            badgeContent={totalQuantity}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#FF9900", 
                color: "#fff",
              },
            }}
          >
            <ShoppingCartIcon sx={{ color: "#333", fontSize: "24px" }} />
          </Badge>
        </IconButton>
        <BasicModal open={open} setOpen={setOpen} />
      </Box>
      <CustomButton
          label="Sign Up"
          width="145px"
          bgcolor= "#63a2f4"
          color= "#E9EFF2"
          onclick={()=>{}}
      />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex",position:'sticky',top:0,backgroundColor:'white',zIndex:1000}}>
      <CssBaseline />
      <div style={{ width: "100%" }}>
        <Toolbar disableGutters>
          <Grid
            container
            sx={{ justifyContent: { lg: "space-around" } }}
            alignItems="center"
          >
            <Grid item xs={1} sx={{ display: { lg: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon style={{ color: "#FF3B83",fontSize: "2.75rem" }} />
              </IconButton>
            </Grid>
            <Grid
              item
              xs
              lg={1.4}
              xl={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Link to="/home">
                <img src={logo} alt="logo" style={{ width: "50%" }} />
              </Link>
            </Grid>
            <Grid
              item
              lg={7}
              xl={6}
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: { lg: "center", xl: "center" },
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    sx={{
                      my: 2,
                      display: "block",
                      fontWeight: "400",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Link
                      to={item.path}
                      className="navLinks"
                      style={{
                        color: "#a70c0c",
                        fontWeight: "500",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid item xs lg={3.6} xl={3.8}>
              <Box
                sx={{
                  flexGrow: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: { xs: "end" },
                }}
              >
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <IconButton
                  onClick={()=>setOpen(true)}
                    sx={{
                      width: "50px", 
                      height: "50px",
                      borderRadius: "8px",
                      backgroundColor: "#fff",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    <Badge
                      badgeContent={totalQuantity}
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: "#FF9900", 
                          color: "#fff",
                        },
                      }}
                    >
                      <ShoppingCartIcon
                        sx={{ color: "#333", fontSize: "24px" }}
                      />
                    </Badge>
                  </IconButton>
                  <BasicModal open={open} setOpen={setOpen} />
                </Box>
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <CustomButton
                    label="Sign Up"
                    width="145px"
                    bgcolor="#63a2f4"
                    color="#E9EFF2"
                    onclick={()=>{}}
                   />
                </Box>
                <CustomButton
                  label="Login"
                  width="145px"
                  bgcolor="#F25E86"
                  color="#E9EFF2"
                  onclick={()=>{}}
                />
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
