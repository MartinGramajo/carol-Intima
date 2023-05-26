import React from "react";
import ProductosDestacados from "../components/productosDestacados/ProductosDestacados";
import Marcas from "../components/marcas/Marcas";

export default function Home() {
  return (
    <div>
      <ProductosDestacados />
      <Marcas />
    </div>
  );
}
