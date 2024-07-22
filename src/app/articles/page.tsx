'use client';

import { useState, useEffect } from 'react';
import { useStore } from '../../store/zustandStore';
import ArticleCard from '../../components/ArticleCard';
import Button from '../../components/Button';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { useRouter } from 'next/navigation';

const ArticlesPage = () => {
  const { articles, setArticles } = useStore();
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const fetchArticles = async () => {
    const res = await fetch('/api/articles');
    const newArticles = await res.json();
    setArticles(newArticles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleAddArticle = async (e) => {
    e.preventDefault();

    const newArticle = { id: Date.now(), title, description };

    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    });

    if (res.ok) {
      fetchArticles();
      setTitle('');
      setDescription('');
    }
  };

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

      <form onSubmit={handleAddArticle}>
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          label="Add Article"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ArticlesPage;