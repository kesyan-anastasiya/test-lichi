'use client';

import Link from 'next/link';
import { useStore } from '../store/zustandStore';
import ArticleCard from '../components/ArticleCard';

const HomePage = () => {
  const articles = useStore((state) => state.articles);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Добро пожаловать в мой блог</h1>
      <Link href="/create-article">
        <span className="mb-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">Создать новую статью</span>
      </Link>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          onClick={() => router.push(`/articles/${article.id}`)}
        />
      ))}
    </div>
  );
};

export default HomePage;
