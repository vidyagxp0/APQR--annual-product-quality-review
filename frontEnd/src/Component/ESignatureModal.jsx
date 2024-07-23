import React from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "white",
  boxShadow: 24,
  padding: theme.spacing(4),
  borderRadius: "8px",
}));

const ESignatureModal = ({ open = true, handleClose, submitAction }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox className="p-6 bg-white rounded-lg shadow-md">
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          sx={{ textAlign: "center", fontWeight: "bold", color: "#1e90ff" }}
        >
          E-Signature
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please select a meaning and an outcome for this task and enter your username and password
          for this task. You are performing an electronic signature, which is legally binding
          equivalent of a handwritten signature.
        </Typography>
        <form className="mt-4 flex  flex-col gap-5">
          <TextField
            fullWidth
            required
            id="username"
            label="Username"
            variant="outlined"
            className="mb-4"
          />
          <TextField
            fullWidth
            required
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            className="mb-4"
          />
          <TextField fullWidth id="comment" label="Comment" variant="outlined" className="mb-4" />
          <div className="flex justify-between mt-4">
            <Button variant="contained" color="primary" className="mr-2" onClick={submitAction}>
              Submit
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </div>
        </form>
      </StyledBox>
    </Modal>
  );
};

export default ESignatureModal;
