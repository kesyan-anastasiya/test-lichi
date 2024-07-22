import { useRouter } from "next/router";

export default function AddArticle() {
  const router = useRouter();
  return (
    <>
      <h1>Article {router.query.id} </h1>
    </>
  );
}
