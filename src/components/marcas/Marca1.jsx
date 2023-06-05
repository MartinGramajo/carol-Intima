import React from "react";
import { Button, Image } from "react-bootstrap";
import andressa from "../../assets/img/andressa.png";
import cuadrada from "../../assets/img/cuadrada.png";

export default function Marca1() {
    return (
        <div className="container" id="andressa">
            <div className="d-flex justify-content-center justify-content-lg-start ">
                <Image
                    src={andressa}
                    alt="andressa"
                    fluid
                    className="my-5 py-5"
                />
            </div>
            <h3 className="text-white mb-5 pb-5 text-center text-lg-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit pariatur.
            </h3>
            <div className="d-flex justify-content-evenly justify-content-lg-between mb-5 flex-wrap">
                <Image
                    src={cuadrada}
                    alt="producto"
                    fluid
                    className="productos-marcas pb-5"
                />
                <Image
                    src={cuadrada}
                    alt="producto"
                    fluid
                    className="productos-marcas pb-5"
                />
                <Image
                    src={cuadrada}
                    alt="producto"
                    fluid
                    className="productos-marcas pb-5"
                />
                <Image
                    src={cuadrada}
                    alt="producto"
                    fluid
                    className="productos-marcas pb-5"
                />
            </div>
            <a
                className="d-flex justify-content-center justify-content-lg-start pb-5 text-decoration-none"
                href="https://google.com"
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
