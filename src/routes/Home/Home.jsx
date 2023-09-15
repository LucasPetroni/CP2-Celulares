import { Link } from "react-router-dom";
import "../../styles/home.css";

export default function Home() {
  return (
    <>
      <section className="container">
        <main>
          <div className="conteudo">
            <img src="../public/Logo-petroni.jpg" alt="Logo Agile Modal" />
            <div className="conteudo-anuncio">
              <div className="Anuncio">
                <Link to="/produto/5">
                  <div className="Anun">
                    <h1>Oferta</h1>
                    <img src="../public/celular5.jpg" alt="foto celular" />
                    <p>Galaxy S21 Ultra</p>
                  </div>
                </Link>
              </div>
              <div className="txt-buton">
                <p>
                  Na St Petroni, acreditamos que a tecnologia não é apenas uma
                  ferramenta, mas uma extensão do seu estilo de vida. Desde
                  2010, temos o prazer de ser a sua loja confiável para os
                  dispositivos móveis mais inovadores e acessórios de alta
                  qualidade. Com uma equipe dedicada e uma seleção abrangente
                  que abrange desde os mais recentes lançamentos até opções
                  confiáveis e acessíveis, estamos aqui para ajudá-lo a
                  encontrar o dispositivo perfeito para suas necessidades. A
                  qualidade é nossa prioridade, e cada produto em nosso estoque
                  é cuidadosamente selecionado e testado para garantir
                  desempenho e confiabilidade excepcionais. Estamos ansiosos
                  para ser parte da sua jornada tecnológica e tornar a
                  experiência de compra na St Petroni memorável e gratificante FODA.
                </p>
                <button>
                  <Link to="/produtos">Produtos</Link>
                </button>
              </div>
              <div className="Anuncio">
                <Link to="/produto/1">
                  <div className="Anun">
                    <h1>Oferta</h1>
                    <img src="../public/celular1.png" alt="foto celular" />
                    <p>Iphone 12</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
