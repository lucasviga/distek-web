import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

import Button from '../../components/Button';
import { BannerContato } from './styles';

export default function ContatoBanner() {
  return(
    <>
      <a name="contato"></a>
      <BannerContato>
        <div className='banner-contato'>
          <h1>Entre em contato com a nossa equipe</h1>

          <div className='banner-contato__btn-box'>
            <Button title="tel:923199-1001">
              <FaPhoneAlt color="#fff" />
              <span>(92) 3199-1001</span>
            </Button>
            <Button title="https://api.whatsapp.com/send?phone=559231991001">
              <FaWhatsapp color="#fff" />
              <span>(92) 3199-1001</span>
            </Button>
            <Button title="mailto:comercial@distek.com.br">
              <FaPhoneAlt color="#fff" />
              <span>comercial@distek.com.br</span>
            </Button>
          </div>
        </div>

        <div className="redes-sociais-box">
          <h1>Siga nossas redes</h1>

          <div className='redes-sociais'>
            <a href="https://facebook.com" target="_blank" without rel="noreferrer">
              <div className="redes-sociais__circle">
                <FaFacebookF size={22} />
              </div>
            </a>

            <a href="https://www.instagram.com/distek.com.br/" target="_blank" without rel="noreferrer">
              <div className="redes-sociais__circle">
                <FaInstagram size={22} />
              </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=559231991001" target="_blank" without rel="noreferrer">
              <div className="redes-sociais__circle">
                <FaWhatsapp size={22} />
              </div>
            </a>
          </div>
        </div>
      </BannerContato>
    </>
  );
}
