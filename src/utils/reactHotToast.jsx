import toast from "react-hot-toast";

export const showToast = (icon, message) => {
  toast(message,
    {
      icon,
      style: {
        borderRadius: '1rem',
        background: '#20232a',
        color: '#fff',
      },
    }
  );
};