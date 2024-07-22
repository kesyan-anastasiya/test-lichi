import Head from "next/head";
import { useRouter } from "next/router";

export default function Articles() {
  const router = useRouter();

  const linkClickHandler = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Список статей</title>
      </Head>
      <h1>Список статей</h1>
      <button onClick={linkClickHandler}>На главную</button>
      <button onClick={() => router.push(`/articles/${id}`)}>Подробнее</button>
    </>
  );
}
