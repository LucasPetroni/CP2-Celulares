import { Link } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";
import { AiFillEdit as Editar } from "react-icons/ai";
import "../../styles/produtos.css";

export default function Produtos() {
  document.title = "Produtos";

  return (
    <>
      <div className="container-chamados">
        <h1>Lista de Produtos</h1>

        <div>
          <table className="Tabela">
            <tr>
              <th>FOTO</th>
              <th>MARCA / MODELO / ARMAZENAMENTO</th>
              <th>VIZUALIZAR PRODUTO</th>
            </tr>

            {ListaProdutos.map((item, indice) => (
              <tr key={indice}>
                <td>
                  <img src={`${item.img}`} alt={`${item.desc}`} />
                </td>
                <td>
                  <div className="caracteristcas">
                    <p className="foto-marca">
                      <img src={`${item.marca}`} alt={`${item.marca}`} />
                    </p>
                    <p>{item.modelo}</p>
                    <p>{item.armaz}</p>
                  </div>
                </td>
                <td>
                  <button className="custom-button">
                    <Link to={`/produto/${item.id}`}>Visualizar Produto</Link>
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
