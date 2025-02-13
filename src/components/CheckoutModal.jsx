import React from "react";
import ReactModal from "react-modal"; // Corrected import for react-modal

const CheckoutModal = ({ closeModal, isOpen }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="bg-white p-8 rounded-lg shadow-lg w-1/3 mx-auto"
      overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center"
    >
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      <p className="mb-4">Please review your items before proceeding to checkout.</p>
      <button
        onClick={closeModal}
        className="bg-red-500 text-white py-2 px-4 rounded-lg"
      >
        Close Modal
      </button>
    </ReactModal>
  );
};

export default CheckoutModal;
