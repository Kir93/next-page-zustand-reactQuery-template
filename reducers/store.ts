import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface IStore {
  me: { id: number } | null;
  login: () => void;
  logout: () => void;
}

const useStore = create<IStore>()(
  devtools((set) => ({
    me: null,
    login: () => set((state) => ({ me: { ...state.me, id: 1 } })),
    logout: () => set(() => ({ me: null }))
  }))
);

export default useStore;
