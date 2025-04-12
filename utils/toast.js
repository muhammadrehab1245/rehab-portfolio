import toast from "react-hot-toast";
import React from "react";

export const showToast = (message, icon, color) => {
  toast(message, {
    duration: 3000,
    position: "top-center",
    icon: icon,
    style: {
      background: color,
      color: "white",
      padding: "26px",
      borderRadius: "17px",
    },
  });
};
