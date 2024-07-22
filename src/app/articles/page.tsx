'use client';

import { useState, useEffect } from 'react';
import { useStore } from '../../store/zustandStore';
import ArticleCard from '../../components/ArticleCard';
import { useRouter } from 'next/navigation';
import AddArticleForm from '../../components/AddArticleForm';

const ArticlesPage = () => {
  const { articles, setArticles } = useStore();
  const router = useRouter();

  const fetchArticles = async () => {
    const res = await fetch('/api/articles');
    const newArticles = await res.json();
    setArticles(newArticles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Articles</h1>

      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          description={article.description}
          onClick={() => router.push(`/articles/${article.id}`)}
        />
      ))}

      <AddArticleForm />
    </div>
  );
};

export default ArticlesPage;