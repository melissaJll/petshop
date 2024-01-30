import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import serverApi from "./api/server";

export default function Contato() {
  const { register, handleSubmit } = useForm();

  const enviarContato = async (dados) => {
    const { nome, email, mensagem } = dados;
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    try {
      await fetch(`${serverApi}/contatos.json`, opcoes);
      alert("Dados enviados");
    } catch (error) {
      console.error("Deu ruim " + error.mensagem);
    }
  };

  return (
    <>
      <Head>
        <title> Contato - Petshop</title>
        <meta name="description" content="contatos do petshop" />
      </Head>
      <StyledContato>
        <h2>Fale conosco</h2>
        <Container>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit((dados) => {
              enviarContato(dados);
            })}
          >
            <div>
              <label htmlFor="nome">Nome: </label>
              <input {...register("nome")} type="text" name="nome" id="nome" />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="mensagem">Mensagem: </label>
              <textarea
                {...register("mensagem")}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="10"
                maxLength={500}
              ></textarea>
            </div>
            <div>
              <button type="submit"> Enviar mensagem</button>
            </div>
          </form>
        </Container>
      </StyledContato>
    </>
  );
}
const StyledContato = styled.section`
  h2::before {
    content: "💌 ";
  }
  button {
    background-color: #663a83;
    border: none;
    color: aliceblue;
    padding: 0.8rem;
    border-radius: var(--borda-arredondada);
    margin: 1.3rem auto;
    font-weight: bold;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #faf7fc;
    color: #041047;
    font-size: 1.1rem;
  }
  form {
    width: 95%;
    margin: auto;
  }
  input,
  textarea {
    width: 71%;
    margin: 0.6rem;
    border: none;
    border-radius: 5px;
    box-shadow: 4px 4px 10px 1px rgb(0 0 0 / 10%);
  }
  input {
    padding: 0.8rem;
  }
  /* label::before {
    content: "🦴 ";
  } */
`;
