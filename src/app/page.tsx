import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        <Link href={"/articles"}>Список статей</Link>
      </p>
    </>
  );
}
