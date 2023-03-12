import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenue sur le site 2 !</h1>
      <Link to="/contact" state={"test"}>
        Contact
      </Link>
    </div>
  );
}
