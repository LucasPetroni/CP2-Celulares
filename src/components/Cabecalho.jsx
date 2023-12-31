import { createElement } from "react";
import "../styles/cabecario.css";

export default function Cabecalho(props) {
  return (
    <>
      <header>
        <img src="../Logo-petroni.jpg" alt="Logo agile modal" id="img-header" />
        <div className="nav-header">
          <ul>
            {props.children.map((item, index) => {
              createElement("li", { key: index }, item);
              return item;
            })}
          </ul>
        </div>
      </header>
    </>
  );
}
