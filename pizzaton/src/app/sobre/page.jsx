import { Header } from "../../components/Header";

export const metadata = {
  title: "Pizzaton - Sobre",
  icons: {
    icon: "/favicon.ico",
  },
};

const Sobre = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <h1>Sobre a pizzaria</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            itaque similique delectus nesciunt amet dolorem quisquam magni aut?
            Minus quam quae in ipsam? Optio corporis quis, non ullam
            consequuntur voluptatibus! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Nisi velit cupiditate aliquid corporis? Debitis
            odit modi qui natus ex voluptatibus, quibusdam optio deleniti
            fugiat, nesciunt possimus laborum velit facilis eius.
          </p>
        </main>
      </div>
    </>
  );
};

export default Sobre;
