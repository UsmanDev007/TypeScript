import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FC<ModalProps> = ({ open, setOpen }) => {
  const handleClose = () =>{
    setOpen(false);
  } 
  const { cart } = useSelector((item: any) => item.cart);
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box>
          {cart.length > 0 ? (
            cart.map((item: any, index: number) => {
              return <Typography key={index}>{item.title}</Typography>;
            })
          ) : (
            <Typography>Your cart is empty</Typography>
          )}
        </Box>
        <Button
          variant="contained"
          color="error"
          onClick={handleClose}
          sx={{ mt: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default BasicModal;
