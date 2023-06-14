import React from "react";
import { Button, Image } from "react-bootstrap";
import yarbik from "../../assets/img/yarbik.png";
import cuadrada from "../../assets/img/cuadrada.png";

export default function Marca4() {
  return (
    <div className="container" id="yarbik">
      <div className="d-flex justify-content-center justify-content-lg-start mt-4">
        <Image src={yarbik} alt="andressa" fluid className="my-5 py-5" />
      </div>
      <h3 className="mb-5 pb-5 text-center text-lg-start color-negro">
        SOMOS UNA FABRICA DE LENCERIA CON MAS 30 AÑOS DE EXPERIENCIA EN EL
        RUBRO.
      </h3>
      <div className="d-flex justify-content-evenly justify-content-lg-between mb-5 flex-wrap">
        <Image
          src="https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/354065653_633161488858044_3871436445392958883_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=e4J9CF3QCB0AX86uJxG&_nc_oc=AQmDcvtgFPdOoaYtah-Y099DUKPdfIL-eDYymUxg59JJI6oPmSvnEhgKiLz7MIdFbrc9BuehHoEa-btjQ3okYLaD&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfCtsBgaRiggwP9NImRl4JZF9ohQdLrmTwiGY9W-ITkqkA&oe=648E5429"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/354233341_633161478858045_8801549332677194426_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=8wq90dWUXCoAX-VDMsC&_nc_ht=scontent.ftuc4-1.fna&oh=00_AfAk06IMrD84_9v0-LnbmXi7Xo0g1vedmZlS4vL3IPebZw&oe=648ED856"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/353847256_633161458858047_6387564100584015373_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=0czLa5glKK8AX__wNPa&_nc_ht=scontent.ftuc4-1.fna&oh=00_AfBymhyNhehNTC9ZHG2O6L88N69xbVlgqFUts6pj7sor9w&oe=648E87CA"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/354236248_633161468858046_3311813847661047103_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=EE1pOzcZPN0AX8tiwK7&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfBUKP8onFep9uo8rV1d3YYilu1fL5t3UfxavhED_u58LQ&oe=648F362B"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
      </div>
      <a
        className="d-flex justify-content-center justify-content-lg-start pb-5 text-decoration-none"
        href="https://www.yarbik.com.ar/productos/"
        target="_blank"
        rel="noreferrer"
      >
        <Button className="boton-marcas2 mb-5">
          <h3 className="mb-0">VER CATALOGO</h3>
        </Button>
      </a>
    </div>
  );
}
