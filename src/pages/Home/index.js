import { Carousel } from 'react-responsive-carousel';

import CarouselMarcas from './CarouselMarcas';
import SectionProdutos from './SectionProdutos';
import ContatoBanner from './ContatoBanner';

import Menu from '../../components/Menu';
import MenuHeader from '../../components/MenuHeader';
import Footer from '../../components/Footer';

import slider01 from '../../assets/img/pic-contato.jpg';

export default function Home() {

  return(
    <>
      <MenuHeader />
      <Menu />

      <Carousel
        showStatus={false}
        showThumbs={false}
        autoPlay
        interval={5000}
        infiniteLoop
        stopOnHover
      >
        <div>
          <img src={slider01} alt="Slider 01"/>
        </div>
        <div>
          <img src={slider01} alt="Slider 01"/>
        </div>
      </Carousel>

      <SectionProdutos />
      <CarouselMarcas />
      <ContatoBanner />

      <Footer />
    </>
  );
}
