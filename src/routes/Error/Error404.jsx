import { Link } from "react-router-dom";
import "../../styles/error.css";

export default function Error404() {
  return (
    <>
      <div className="error-404-container">Error 404</div>
      <div className="error-404-button">
        <button>
          <Link to="/">Voltar Home</Link>
        </button>
      </div>
    </>
  );
}
