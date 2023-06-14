import React from "react";
import { Button, Image } from "react-bootstrap";
import nucifera from "../../assets/img/nucifera.jpg";
import cuadrada from "../../assets/img/cuadrada.png";

export default function Marca2() {
  return (
    <div className="container" id="nucifera">
      <div className="d-flex justify-content-center justify-content-lg-start ">
        <Image src={nucifera} alt="andressa" fluid className="my-5 py-5" />
      </div>
      <h3 className="mb-5 pb-5 text-center text-lg-start color-negro">
        - Ropa interior con diseños exclusivos para vestir tu piel. <br /> -
        Ventas por Mayor y Menor
      </h3>
      <div className="d-flex justify-content-evenly justify-content-lg-between mb-5 flex-wrap">
        <Image
          src="https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/308175294_770620891034830_1876820488896170414_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=UIG7drI38QgAX-jLmiP&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfClwEvNHcXwuYNa0zQ9Ao4cvhczcbkv2zqhGTL3Zj4_Ew&oe=648F6FFD"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://scontent.ftuc4-2.fna.fbcdn.net/v/t1.6435-9/92254114_2608248516119558_5925492874773790720_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=O50avvP9o4AAX_f3N-w&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfDpRn8DvFqiqbe-rD2AJDNrUFVybqaL8pE_tIyjQiUIgA&oe=64B1476E"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/337284972_532440182138710_4230859477750153860_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=UVq3TAFPvwoAX_EBGNR&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfBqu62yoL0PQ7TRN4Tw63WPPqTliUsITez-Ij9IeySe2g&oe=648F5815"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
        <Image
          src="https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/329635225_2002947726577265_6728012588523484225_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=BEST1kNiOcYAX8rwtws&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfCfS7BXnnDMF1x316mdHFKBcF-zFNomz9U2c1EJ7U7oOA&oe=648F08D5"
          alt="producto"
          fluid
          className="productos-marcas pb-5"
        />
      </div>
      <a
        className="d-flex justify-content-center justify-content-lg-start pb-5 text-decoration-none"
        href="https://www.instagram.com/nuciferaintimates/?hl=es"
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
