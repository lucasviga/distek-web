import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

import Button from '../../components/Button';
import { BannerContato } from './styles';

export default function ContatoBanner() {
  return(
    <BannerContato>
      <div className='banner-contato'>
        <h1>Entre em contato com a nossa equipe</h1>

        <div className='banner-contato__btn-box'>
          <Button title="92 9.9999-9999">
            <FaPhoneAlt color="#fff" />
            <span>(92) 9.9999-9999</span>
          </Button>
          <Button title="0800 800 800">
            <FaPhoneAlt color="#fff" />
            <span>(92) 9.9999-9999</span>
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

          <a href="https://facebook.com" target="_blank" without rel="noreferrer">
            <div className="redes-sociais__circle">
              <FaInstagram size={22} />
            </div>
          </a>

          <a href="https://facebook.com" target="_blank" without rel="noreferrer">
            <div className="redes-sociais__circle">
              <FaWhatsapp size={22} />
            </div>
          </a>
        </div>
      </div>
    </BannerContato>
  );
}
