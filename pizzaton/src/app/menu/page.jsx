import Link from "next/link";
import Image from "next/image";
import { Header } from "../../components/Header";
import { pizzas } from "../../data/menu.json";

export const metadata = {
  title: "Pizzaton - Menu",
  icons: {
    icon: "/favicon.ico",
  },
};

const Menu = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <h1>Menu</h1>
          {pizzas.map(({ slug, name, price, photoPath }) => (
            <div key={slug}>
              <Link href={`/pizzas/${slug}`}>
                <Image
                  src={photoPath}
                  alt={`Foto da pizza ${name}`}
                  width={500}
                  height={300}
                ></Image>
                <p>
                  {name} ({price})
                </p>
              </Link>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default Menu;
