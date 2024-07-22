import { FC } from 'react';

interface CardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ArticleCard: FC<CardProps> = ({ title, description, onClick }) => (
  <div className="bg-white rounded-lg shadow p-4 mb-4 cursor-pointer" onClick={onClick}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default ArticleCard;