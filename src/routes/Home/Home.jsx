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
                    <img
                      src="https://planoscelular.claro.com.br/medias/18519-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w5NTI2NXxpbWFnZS9wbmd8YUdVNUwyZzNPUzg1TlRBeU56TXpNamN4TURjd0x6RTROVEU1WHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfDhiYmM4NzFjNzM1YjQ5YWZlN2RhZjQ5OGMwNWU0NmQzNjg2OWQ3NjNhODM5NjNmYWRiNGYyOGZhYjRkN2I0NGM"
                      alt="foto celular"
                    />
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
                  experiência de compra na St Petroni memorável e gratificante
                  FODA.
                </p>
                <button>
                  <Link to="/produtos">Produtos</Link>
                </button>
              </div>
              <div className="Anuncio">
                <Link to="/produto/1">
                  <div className="Anun">
                    <h1>Oferta</h1>
                    <img
                      src="https://planoscelular.claro.com.br/medias/18297-0-zero-515Wx515H-productMain?context=bWFzdGVyfGltYWdlc3wxNTQyMTV8aW1hZ2UvcG5nfGFHWmtMMmc1TkM4NU5qa3lOamszTWprMk9USTJMekU0TWprM1h6QmZlbVZ5YjE4MU1UVlhlRFV4TlVoZmNISnZaSFZqZEUxaGFXNHxhODdhZDE3ZWVmOTVlYTVlNzQ3ZjQzYWMyN2JhN2Q5MWFhZWEzYTNmOTRkMjgxYjA5NWEzNjA1NjJhNzhlYzkz"
                      alt="foto celular"
                    />
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
