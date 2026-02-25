import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({
  position = { top: "50%", left: "50%" },
  size = { width: "500px", height: "500px" },
}) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute -z-20 pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="
          w-full h-full rounded-full
          bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500
          opacity-25 blur-[140px]
          animate-blob-slow
        "
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.object,
  size: PropTypes.object,
};

export default BlurBlob;