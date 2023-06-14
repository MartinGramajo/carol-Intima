import React from "react";
import { Button, Image } from "react-bootstrap";
import andressa from "../../assets/img/andressa.png";
import cuadrada from "../../assets/img/cuadrada.png";

export default function Marca1() {
  return (
    <div className="container" id="andressa">
      <div className="d-flex justify-content-center justify-content-lg-start ">
        <Image src={andressa} alt="andressa" fluid className="my-5 py-5" />
      </div>
      <h3 className="text-white mb-5 pb-5 text-center text-lg-start">
        ANDRESSA LINGERIE es una marca fundada por su dueño y actual director
        Gabriel Marcelo Cardozo en el año 2008, la cual logró desde entonces una
        fuerte presencia en el mercado local con su marca ANDRESSA. Desde el
        comienzo se dedicó a la fabricación y comercialización de ropa interior
        femenina y trajes de baño. Con el transcurso de los años se han
        incorporado otras líneas de producción tales como la ropa interior
        masculina, de niños y ropa de dormir. Andressa tiene como misión proveer
        a sus clientes productos cuidadosamente confeccionados, seleccionando
        insumos y materias primas de primera calidad para obtener prendas de
        alto nivel a precios accesibles. Andressa se enfoca en las necesidades
        de sus usuarios, quienes valoran la calidad y durabilidad de los
        productos, además de su diseño y accesibilidad.
      </h3>
      <div className="d-flex justify-content-evenly justify-content-lg-between mb-5 flex-wrap">
        <Image
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/161/618/products/26-71-7a2fb9cffde6464cb416757747222082-1024-1024.webp"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/161/618/products/100-11-1d2de4e3321c1d6fcc16757773738698-640-0.webp"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/161/618/products/8-31-04c01c11da833239b716757745564266-640-0.webp"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/161/618/products/147-31-038dafd7ef1d34366216703391518464-640-0.webp"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
      </div>
      <a
        className="d-flex justify-content-center justify-content-lg-start pb-5 text-decoration-none"
        href="https://www.andressalingerie.com.ar/productos/?mpage=4"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="boton-marcas mb-5">
          <h3 className="mb-0">VER CATALOGO</h3>
        </Button>
      </a>
    </div>
  );
}
