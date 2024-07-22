import React from 'react';

interface ArticleCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, onClick }) => (
  <div onClick={onClick} className="border p-4 mb-4 cursor-pointer">
    <h2 className="text-2xl font-bold">{title}</h2>
    <p>{description}</p>
  </div>
);

export default ArticleCard;