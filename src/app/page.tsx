import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Добро пожаловать в мой блог</h1>
      <p>
        <Link href={"/articles"}>Список статей</Link>
      </p>
    </>
  );
}
