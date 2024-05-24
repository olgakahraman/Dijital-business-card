import React from "react";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import "./App.css";

function App() {
  return (
    <div className="container">
      <CardHeader />
      <CardBody />
      <CardFooter />
    </div>
  );
}

export default App;
