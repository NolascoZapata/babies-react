import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import BotonGenerico from './../BotonGenerico/BotonGenerico'
import './Home.css'

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} className="carousel">
      <Carousel.Item>
        <img
          className=""
          src="./assets/img/pexels-lisa-fotios-1902830.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='label-1'>
          <div>
            <h3>El estilo perfecto</h3>
            <h3>para tus hijos</h3>
            <BotonGenerico contenido={"Ver más"} onClick={()=>{window.location.href='category/bebes'}}/>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='./assets/img/pexels-karolina-grabowska-4964280.jpg'
          alt="Second slide"
        />
        <Carousel.Caption  className='label-2'>
          <h3>Mirá nuestras ofertas</h3>
          <BotonGenerico contenido={"Ver más"} onClick={()=>{window.location.href='category/ofertas'}}/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="./assets/img/pexels-pixabay-47220.jpg"
          alt="Third slide"
        />
        <Carousel.Caption  className='label-3'>
          <h3>Mejores tamaños a los mejores precios</h3>
          <BotonGenerico contenido={"Ver más"} onClick={()=>{window.location.href='category/boy'}}/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Home