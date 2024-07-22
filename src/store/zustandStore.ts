import create from 'zustand';

interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  comments: string[];
}

interface State {
  articles: Article[];
  addArticle: (article: Article) => void;
  editComment: (articleId: number, commentIndex: number, newComment: string) => void;
}

const useStore = create<State>((set) => ({
  articles: [],
  addArticle: (article) => set((state) => ({ articles: [...state.articles, article] })),
  editComment: (articleId, commentIndex, newComment) => set((state) => ({
    articles: state.articles.map((article) =>
      article.id === articleId
        ? {
            ...article,
            comments: article.comments.map((comment, index) =>
              index === commentIndex ? newComment : comment
            ),
          }
        : article
    ),
  })),
}));

export default useStore;