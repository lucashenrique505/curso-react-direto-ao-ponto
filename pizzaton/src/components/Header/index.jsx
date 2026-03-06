import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <h2>Pizz🍕ton!</h2>
      </Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/menu">Menu</Link>
      </nav>
    </header>
  );
};

export { Header };
