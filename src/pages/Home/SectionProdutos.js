import Button from '../../components/Button';
import { Produtos } from './styles';

export default function SectionProdutos() {
  return(
    <>
      <a name="produtos"></a>
      <Produtos>
        <div className="bg-produto">
          <div className="txt-produto">
            <div className="txt-produto__footer">
              <p>Title Product</p>
              <Button title="0800 800 800">
                <span>Falar com especialista</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-produto">
          <div className="txt-produto">
            <div className="txt-produto__footer">
              <p>Title Product</p>
              <Button title="0800 800 800">
                <span>Falar com especialista</span>
              </Button>
            </div>
          </div>
        </div>
      </Produtos>
    </>
  );
}
