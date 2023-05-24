import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function ProductosDestacados() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className="d-flex align-items-center justify-content-center">
          <Image
            className="d-none d-sm-block"
            src="https://www.casayonimayorista.com.ar/image/cache/catalog/slider-home-0-1903x800.jpg"
            alt="banner"
            fluid
          />
          <Image
            className="d-sm-none d-block"
            src="https://www.casayonimayorista.com.ar/image/cache/catalog/slider-home-0-1903x800.jpg"
            alt="banner"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item className="d-flex align-items-center justify-content-center">
          <Image
            className="d-none d-sm-block"
            src="https://www.casayonimayorista.com.ar/image/cache/catalog/slider-home-2-1903x800.jpg"
            alt="banner"
            fluid
          />
          <Image
            className="d-sm-none d-block"
            src="https://www.casayonimayorista.com.ar/image/cache/catalog/slider-home-2-1903x800.jpg"
            alt="banner"
            fluid
          />
        </Carousel.Item>
        <Carousel.Item className="d-flex align-items-center justify-content-center">
          <Image
            className="d-none d-sm-block"
            src="https://www.casayonimayorista.com.ar/image/cache/catalog/slider-home-1-1903x800.jpg"
            alt="banner"
            fluid
          />
          <Image
            className="d-sm-none d-block"
            src="https://www.casayonimayorista.com.ar/image/cache/catalog/slider-home-1-1903x800.jpg"
            alt="banner"
            fluid
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
