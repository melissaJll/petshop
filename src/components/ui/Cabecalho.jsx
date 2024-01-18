import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>
          <Image
            src="/images/logo.png"
            width={48}
            height={48}
            alt="patinha dentro de um coração"
          />
          <Link href="/">Petshop</Link>
        </h1>
        <Menu></Menu>
      </header>
    </>
  );
}
