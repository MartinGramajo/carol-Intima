import React from "react";
import { Image } from "react-bootstrap";
import icono1 from "../../assets/img/footer-icon-1.png";
import icono2 from "../../assets/img/footer-icon-2.png";
import icono3 from "../../assets/img/footer-icon-3.png";
import icono4 from "../../assets/img/footer-icon-4.png";
import logo from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <div className="mt-auto color-fondo-footer">
      <div className="container pb-5">
        <div className="row">
          <div className="text-center">
            <div className="py-2 pt-4">
              <a
                className="text-decoration-none"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="logo-redes mx-2"
                  src={icono1}
                  fluid
                  alt="face"
                />
              </a>

              <a
                className="text-decoration-none"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="logo-redes mx-2"
                  src={icono2}
                  fluid
                  alt="face"
                />
              </a>
              <a
                className="text-decoration-none"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="logo-redes mx-2"
                  src={icono3}
                  fluid
                  alt="face"
                />
              </a>
              <a
                className="text-decoration-none"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="logo-redes mx-2"
                  src={icono4}
                  fluid
                  alt="face"
                />
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Image className="logo-footer" src={logo} fluid alt="face" />
          </div>
          <div className="d-flex  justify-content-center pt-5">
            {" "}
            <a
              className="text-decoration-none text-dark "
              href="https://www.dkzstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="d-none d-lg-block">
                <h6 className="text-white">
                  <span>
                    Produced by DKZ Studio &copy; {new Date().getFullYear()}
                  </span>{" "}
                  <span> Todos los derechos reservados</span>
                </h6>
              </div>
              <div className="d-lg-none d-block">
                <h6 className="color-gris">
                  <span>
                    Produced by DKZ Studio &copy; {new Date().getFullYear()}
                  </span>{" "}
                  <br />
                  <span> Todos los derechos reservados</span>
                </h6>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
