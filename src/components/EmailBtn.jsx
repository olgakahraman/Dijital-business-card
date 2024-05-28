import React from "react";

export default function EmailBtn() {
  return (
    <button>
      <a
        href="mailto:ol.khrmn@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-envelope"></i> Email
      </a>
    </button>
  );
}
