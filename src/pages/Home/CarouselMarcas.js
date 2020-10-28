// import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import { Marcas } from './styles';

import img1 from '../../assets/marcas/intelbras.png';
import img2 from '../../assets/marcas/multilaser.png';
import img3 from '../../assets/marcas/fibracem.png';
import img4 from '../../assets/marcas/mpt.png';
import img5 from '../../assets/marcas/wec.png';
import img6 from '../../assets/marcas/cablena.png';
import img7 from '../../assets/marcas/oiw.png';
import img8 from '../../assets/marcas/ubiquiti.png';
import img9 from '../../assets/marcas/mikrotik.png';
import img10 from '../../assets/marcas/dlink.png';
import img11 from '../../assets/marcas/tplink.png';
import img12 from '../../assets/marcas/furukawa.png';
import img13 from '../../assets/marcas/moura.png';
import img14 from '../../assets/marcas/skylane.png';
import img15 from '../../assets/marcas/wurth.png';
import img16 from '../../assets/marcas/apc.png';
import img17 from '../../assets/marcas/grandstream.png';
import img18 from '../../assets/marcas/datacom.png';
import img19 from '../../assets/marcas/volt.png';
import img20 from '../../assets/marcas/algcom.png';
import img21 from '../../assets/marcas/greatek.png';
import img22 from '../../assets/marcas/ripley.png';
import img23 from '../../assets/marcas/microtelefonia.png';


export default function CarouselMarcas() {
  const state = {
    items: [
      {id: 1, url: img1, title: 'item #1'},
      {id: 2, url: img2, title: 'item #2'},
      {id: 3, url: img3, title: 'item #3'},
      {id: 4, url: img4, title: 'item #4'},
      {id: 5, url: img5, title: 'item #5'},
      {id: 6, url: img6, title: 'item #6'},
      {id: 7, url: img7, title: 'item #7'},
      {id: 8, url: img8, title: 'item #8'},
      {id: 9, url: img9, title: 'item #9'},
      {id: 10, url: img10, title: 'item #10'},
      {id: 11, url: img11, title: 'item #11'},
      {id: 12, url: img12, title: 'item #12'},
      {id: 13, url: img13, title: 'item #13'},
      {id: 14, url: img14, title: 'item #14'},
      {id: 15, url: img15, title: 'item #15'},
      {id: 16, url: img16, title: 'item #16'},
      {id: 17, url: img17, title: 'item #17'},
      {id: 18, url: img18, title: 'item #18'},
      {id: 19, url: img19, title: 'item #19'},
      {id: 20, url: img20, title: 'item #20'},
      {id: 21, url: img21, title: 'item #21'},
      {id: 22, url: img22, title: 'item #22'},
      {id: 23, url: img23, title: 'item #23'}
    ]
  }

  // const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  // const handleResize = (e) => {
  //   setWidthScreen(window.innerWidth);
  //  };

  // useEffect(() => {
  //   function getWindow() {
  //     const width = window.addEventListener("resize", handleResize);
  //     setWidthScreen(width);
  //   }

  //   getWindow();
  // }, []);

  return(
    <>
      <a name="marcas"></a>
      <Marcas>
        <h1>Oferecemos as melhores marcas do mercado</h1>
        <br /><br />

        <Carousel itemsToScroll={
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
            ? 1
            : 2
        }

        itemsToShow={
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
            ? 1
            : 4
        }
        >
          {state.items.map(item =>
            <div key={item.id}>
              <img width="200" src={item.url} alt={item.title} />
            </div>
          )}
        </Carousel>
      </Marcas>
    </>
  );
}

