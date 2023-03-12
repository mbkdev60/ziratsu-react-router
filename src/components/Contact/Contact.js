import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Section contact</h1>
    </div>
  );
}
