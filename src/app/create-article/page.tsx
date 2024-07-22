'use client';

import { useState } from 'react';
import { useStore } from '../../store/zustandStore';
import { useRouter } from 'next/navigation';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addArticle = useStore((state) => state.addArticle);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   addArticle({ title, description });
   setTitle('');
   setDescription('');
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
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
  );
};

export default CreateArticle;