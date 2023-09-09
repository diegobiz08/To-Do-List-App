import create from 'zustand';

type AppState = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export const useStore = create<AppState>((set) => ({
    darkMode: false,
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
