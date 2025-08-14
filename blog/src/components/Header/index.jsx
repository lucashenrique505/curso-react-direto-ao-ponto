import "./styles.css";
import mainImage from "./header-image.jpeg";

function Header() {
  return (
    <header>
      <h1>Meu Blog!</h1>
      <img
        src={mainImage}
        alt="Tela de computador com gráficos e dois homens conversando"
      />
    </header>
  );
}

export default Header;
