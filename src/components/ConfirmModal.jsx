/* eslint-disable react/prop-types */
const ConfirmModal = ({ isOpen, onClose, onConfirm, clubName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p className="text-gray-600 mt-2">
          Are you sure you want to delete <strong>{clubName}</strong>?
        </p>
        <div className="flex justify-center mt-4 gap-4">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Yes, Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
