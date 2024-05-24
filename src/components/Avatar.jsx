import React from "react";
import image from "../images/me.jpg";

export default function Avatar() {
  return <img src={image} className="avatar-img" alt="user's avatar image" />;
}
