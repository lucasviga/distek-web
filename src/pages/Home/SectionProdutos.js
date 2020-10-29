import Button from '../../components/Button';
import { Produtos } from './styles';

export default function SectionProdutos() {
  return(
    <>
      <a href="!#" name="produtos"><div/></a>
      <Produtos>
        <div className="bg-produto">
          <div className="txt-produto">
            <div className="txt-produto__footer">
              <p>Title# Product</p>
              <Button title="tel:923199-1001">
                <span>Falar com atendente</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-produto">
          <div className="txt-produto">
            <div className="txt-produto__footer">
              <p>Title Product</p>
              <Button title="tel:923199-1001">
                <span>Falar com atendente</span>
              </Button>
            </div>
          </div>
        </div>
      </Produtos>
    </>
  );
}
