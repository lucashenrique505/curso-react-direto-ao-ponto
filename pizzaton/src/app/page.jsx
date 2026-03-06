import { Header } from "../components/Header";
import { slogan, address, phone, whatsapp } from "../data/pizzaton.json";

export const metadata = {
  title: "Pizzaton",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <h2 className="slogan">{slogan}</h2>
          <div className="info">
            <p>
              📍 <strong>Endereço: </strong>
              {address}
            </p>
            <p>
              📞 <strong>Telefone: </strong>
              {phone}
            </p>
            <p>
              📱 <strong>Whatsapp: </strong>
              {whatsapp}
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
