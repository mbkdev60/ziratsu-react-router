import React from "react";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Woops cette page n'existe pas !!</h1>
      <button onClick={backHome}>Retour à l'accueil</button>
    </div>
  );
}
