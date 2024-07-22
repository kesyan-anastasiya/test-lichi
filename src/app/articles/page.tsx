"use client";

import { useStore } from "../../store/zustandStore";
import ArticleCard from "../../components/ArticleCard";
import { useRouter } from "next/navigation";

const ArticlesPage = () => {
  const articles = useStore((state) => state.articles);
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Список статей</h1>

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

export default ArticlesPage;
