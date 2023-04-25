import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

export default function HomePage() {
  return (
    <>
      <Hero title="Awesome Fashion" max="true">
        <Link style={{ marginTop: "2rem" }} className="btn" to="/products">
          our products
        </Link>
      </Hero>
      <Services></Services>
      <Featured></Featured>
    </>
  );
}
