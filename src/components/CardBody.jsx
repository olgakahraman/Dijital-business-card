import React from "react";
import UserName from "../components/UserName";
import EmailBtn from "../components/EmailBtn";
import About from "../components/About";
import Interests from "../components/Interests";
import "../App.css";

export default function CardBody() {
  return (
    <div className="card-body">
      <UserName />
      <EmailBtn />
      <About />
      <Interests />
    </div>
  );
}
