import React, { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa"; // You can use any icon library you prefer

const Notification = ({ message, onClose, duration }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the notification
    setVisible(true);

    // Auto close the notification after the specified duration
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration - 300); // Start hiding before duration ends to complete animation

    // I Ensure the onClose callback is called after the animation ends
    const hideTimer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-24 right-4 z-50 bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 transition-transform duration-300 ${
        visible ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <FaExclamationTriangle />
      <span>{message}</span>
    </div>
  );
};

export default Notification;
