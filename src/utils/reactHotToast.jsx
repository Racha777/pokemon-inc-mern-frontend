import toast from "react-hot-toast";

export const showToast = (icon, message) => {
  toast(message,
    {
      icon,
      style: {
        borderRadius: '1rem',
        background: '#20232a',
        color: '#fff',
        boxShadow: '0 0 0 0.125rem #8888, 0 0 0 0.25rem #8888'
      },
    }
  );
};