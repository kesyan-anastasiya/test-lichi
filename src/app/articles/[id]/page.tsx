'use client'; // Это указывает Next.js, что компонент является клиентским

import { useRouter } from 'next/navigation'; // Импортируем useRouter из next/navigation
import useStore from '../../../store/zustandStore';

const ArticlePage = () => {
  const router = useRouter();
  const { id } = router.query; // Используем роутер, чтобы получить id статьи
  const { articles } = useStore();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div>{article.description}</div>
    </div>
  );
};

export default ArticlePage;
