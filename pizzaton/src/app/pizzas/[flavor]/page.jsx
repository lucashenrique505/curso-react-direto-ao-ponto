import Image from "next/image";
import { Header } from "@/components/Header";
import { pizzas } from "@/data/menu.json";

export const dynamicParams = false;

export async function generateStaticParams() {
  return pizzas.map((p) => ({
    flavor: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { flavor } = await params;
  const pizza = pizzas.find((p) => p.slug === flavor);

  return {
    title: `Pizzaton - ${pizza?.name}`,
    icons: {
      icon: "/favicon.ico",
    },
  };
}

const Flavor = async ({ params }) => {
  const { flavor } = await params;
  const { name, price, photoPath } = pizzas.find((p) => p.slug === flavor);

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <h1>{name}</h1>

          <h2>{price}</h2>

          <Image
            src={photoPath}
            alt={`Foto da pizza ${name}`}
            width={900}
            height={500}
          ></Image>
        </main>
      </div>
    </>
  );
};

export default Flavor;
