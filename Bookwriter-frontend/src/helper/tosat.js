import { toast } from "react-toastify";

export const showToast = (message, type = "success") => {
  toast[type](message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};
