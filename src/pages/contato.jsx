import Container from "@/components/ui/Container";
import Head from "next/head";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import serverApi from "./api/server";
import { useRouter } from "next/router";

export default function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let router = useRouter();

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
      router.push("/");
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
              <input
                {...register("nome", { required: true })}
                type="text"
                name="nome"
                id="nome"
              />
            </div>

            {/*"?" optional chaining: encadeamento opcional, usado para evitar 
            erros caso uma propriedade possa ser null ou undefined*/}
            {errors.nome?.type == "required" && <p>Você deve digitar o nome</p>}

            <div>
              <label htmlFor="email">Email: </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
              />
            </div>

            {errors.email?.type == "required" && (
              <p>Você deve digitar o email</p>
            )}

            <div>
              <label htmlFor="mensagem">Mensagem: </label>
              <textarea
                {...register("mensagem", { required: true, minLength: 20 })}
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="10"
                maxLength={500}
              ></textarea>
            </div>

            {errors.mensagem?.type == "required" && (
              <p>Você deve digitar uma mensagem</p>
            )}
            {errors.mensagem?.type == "minLength" && (
              <p>Escreva pelo menos 20 characteres</p>
            )}

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
    padding: 0.9rem;
    border-radius: var(--borda-arredondada);
    margin: 1.3rem auto;
    font-weight: bold;
    cursor: pointer;
  }
  form > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #faf7fc;
    color: #041047;
    font-size: 1.1rem;
    font-weight: bold;

    /* Paragrafos adjacente as divs */
    & + p {
      color: #eb0000;
    }
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
    padding: 0.9rem;
  }
  /* label::before {
    content: "🦴 ";
  } */
`;
