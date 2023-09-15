import React from "react";
import { ListaProdutos } from "../../components/ListaProdutos";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/vizualizarProduto.css";

export default function VisualizarProdutos() {
  document.title = "Visualizar Produtos";

  const { id } = useParams();

  const produto = ListaProdutos.filter((item) => item.id === parseInt(id))[0];

  return (
    <>
      <div className="container12">
        <div className="container-produto-detalhes">
          <h1>Detalhes do Produto</h1>
        </div>
        <div className="containerProd">
          <div className="imagem-prod">
            <img src={produto.img} alt={produto.modelo} />
          </div>
          <div className="caracteriscas">
            <p>
              <img src={produto.marca} alt={produto.marca} />
            </p>
            <p>{produto.modelo}</p>
            <p>{produto.armaz}</p>
            <p>{produto.preco}</p>
            <p>Cores Disponiveis: {produto.cores}</p>
          </div>
        </div>
      </div>
    </>
  );
}
