import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Typography,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "./Button";
import { Snackbar, Alert } from "@mui/material";
import { clearCart } from "../store/CardSystem";
// Define the props type
interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "600px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  maxHeight: "90vh",
  overflowY: "auto",
  p: 4,
};

const BasicModal: React.FC<ModalProps> = ({ open, setOpen }) => {
  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation(); // To avoid bubbling up
    setOpen(false);
  };
  const dispatch = useDispatch();

  const { cart } = useSelector((state: any) => state.cart);

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  // Handle quantity change
  const handleQuantityChange = (id: number, value: string) => {
    const newQuantity = Math.max(1, Number(value));
    setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
  };
  console.log(cart);
  const totalAmount = cart.reduce((sum: number, product: any) => {
    return sum + (quantities[product.id] || 1) * product.price;
  }, 0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOrderPlacement = () => {
    setSnackbarOpen(true);
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              backgroundColor: "red",
              color: "white",
              width: 26,
              height: 26,
              minWidth: 26,
              minHeight: 26,
              padding: 0,
              "&:hover": {
                backgroundColor: "darkred",
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
        {cart.length > 0 ? (
          <>
            <Typography variant="h5" gutterBottom textAlign="center">
              Product Listing
            </Typography>
            <Box sx={{ maxHeight: "60vh", overflowY: "auto" }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>SubTotal</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {cart.map((product: any) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            width="50"
                            height="50"
                            style={{ borderRadius: "8px" }}
                          />
                        </TableCell>
                        <TableCell>{product.title}</TableCell>
                        <TableCell>${Math.round(product.price)}</TableCell>
                        <TableCell>
                          <TextField
                            type="number"
                            value={quantities[product.id] || 1}
                            onChange={(e) =>
                              handleQuantityChange(product.id, e.target.value)
                            }
                            inputProps={{ min: 1 }}
                            size="small"
                            sx={{ width: "60px" }}
                          />
                        </TableCell>
                        <TableCell>
                          $
                          {Math.round(
                            (quantities[product.id] || 1) * product.price
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6">${Math.round(totalAmount)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <CustomButton
                label="CheckOut"
                bgcolor="#11a87d"
                width="145px"
                color="white"
                onclick={() => {
                  handleOrderPlacement();
                }}
              />
              <CustomButton
                label="Remove Carts"
                bgcolor="#a81128"
                width="145px"
                color="white"
                onclick={() => dispatch(clearCart())}
              />
            </Box>
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={() => setSnackbarOpen(false)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={() => setSnackbarOpen(false)}
                severity="success"
                sx={{ width: "100%" }}
              >
                Order Placed Successfully!
              </Alert>
            </Snackbar>
          </>
        ) : (
          <Box style={{ textAlign: "center", marginTop: 20 }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              width="150"
            />
            <h3>Your cart is empty</h3>
            <Typography>Looks like you haven't added anything yet.</Typography>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default BasicModal;
