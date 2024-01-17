import Produtos from "@/pages/produtos";
import Link from "next/link";

// children varia por página

//_app.js
//Os components são todos chamados <Component {...pageProps} />
//e estão envolvidos pelo Layout e o conteudo dinamico children vem de acordo com a página
export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Petshop</h1>
        <nav>
          <Link href="/">Blog</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </header>
      <main className="limitador">{children}</main>
    </>
  );
}
