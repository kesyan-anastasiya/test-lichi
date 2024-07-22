'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useStore } from '../../../store/zustandStore';

const ArticlePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const { articles } = useStore();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div>{article.description}</div>
      <button onClick={() => router.back()} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        Go Back
      </button>
    </div>
  );
};

export default ArticlePage;
