import Produtos from "@/pages/produtos";
// import Link from "next/link"; vem do componente Menu
import Cabecalho from "./Cabecalho";

export default function Layout({ children }) {
  return (
    <>
      <Cabecalho />

      <main className="limitador">{children}</main>
    </>
  );
}
