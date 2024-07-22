import create from 'zustand';

export const useStore = create((set) => ({
  articles: [],
  setArticles: (newArticles) => set({ articles: newArticles }),
}));