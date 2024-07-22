import create from 'zustand';

interface Article {
  id: number;
  title: string;
  description: string;
}

interface AppState {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
  addArticle: (article: Omit<Article, 'id'>) => void;
}

export const useStore = create<AppState>((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
  addArticle: (article) =>
    set((state) => ({
      articles: [...state.articles, { ...article, id: Date.now() }],
    })),
}));