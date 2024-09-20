import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toaster({ showSuccess, showError, showInfo }) {
  return (
    <>
      {/* ToastContainer is required for showing toasts */}
      <ToastContainer />
    </>
  );
}
