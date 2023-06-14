import React from "react";
import { Button, Image } from "react-bootstrap";
import rr from "../../assets/img/rr.png";
import cuadrada from "../../assets/img/cuadrada.png";

export default function Marca3() {
  return (
    <div className="container" id="rr">
      <div className="d-flex justify-content-center justify-content-lg-start mt-4">
        <Image src={rr} alt="andressa" fluid className="my-5 py-5" />
      </div>
      <h3 className="mb-5 pb-5 text-center text-lg-start text-white">
        Mi nombre es Cami. Soy diseñadora gráfica y en el año 2016 decidí
        emprender este sueño que es RAFF INTIMATES. Una empresa argentina que
        nació jugando en el living de la casa de papá, junto con la ayuda de mis
        amigas o en la terraza de mi prima donde durante mucho tiempo hicimos
        showrooms. Junto con mi hermana, Agos, llevamos a cabo este proyecto que
        gracias a vos, todos los días crece un poquito más. Creyendo que
        emprender no es fácil, pero todos los días ponemos lo mejor de nosotras
        junto a nuestro equipo para seguir mejorando y apostando a la Industria
        nacional. Raff nace de la necesidad de traer al mercado un producto de
        lencería de diseño que se destaque por su calidad, comodidad y alegría a
        la hora de lucirlo.... pero sobre todo que sea innovador por su diseño.
        Luego de trabajar 4 años en el negocio familiar de lencería, y con más
        de 50 años en la industria textil mi familia, soñé con diseñar un
        producto que sea colorido, divertido, algo sexy y con una mutación
        constante! En raff creamos prendas que todo el tiempo van cambiando para
        que las mujeres que lo eligen todos los días amanezcan con una prenda
        que las sienta lindas y divertidas... ¡Y también un poco sexies! ¿Alguna
        vez te pusiste a pensar que las prendas de cama, o ropa interior, son
        las primeras que elegís en la mañana y también por la noche?
      </h3>
      <div className="d-flex justify-content-evenly justify-content-lg-between mb-5 flex-wrap">
        <Image
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/img_7098-21-c50e660095e93ac30616857070020197-1024-1024.webp"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/img_6563-21-4f684845e2bbeee6a516838096657850-1024-1024.webp"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/img_65781-c962e2b7edf1081e7316838101045223-1024-1024.webp"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/268/357/products/img_65231-0c4420e95a114a2c8f16838095693759-1024-1024.webp"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
      </div>
      <a
        className="d-flex justify-content-center justify-content-lg-start pb-5 text-decoration-none"
        href="https://www.raffintimates.com.ar/"
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
