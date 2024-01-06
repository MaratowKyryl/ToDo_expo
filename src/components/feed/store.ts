import { create } from 'zustand';

import { ITodoItem } from './models';

export interface TodoState {
  pinnedTodos: ITodoItem[] | null;
  todos: ITodoItem[] | null;
  setTodos: (data: ITodoItem[]) => void;
}

export const useTodoItemStore = create<TodoState>((set) => ({
  pinnedTodos: null,
  todos: null,
  setTodos: (data) => {
    // const response = fetch(data);

    const pinnedTodos = data.filter((todo) => todo.isPinned);
    const regularTodos = data.filter((todo) => !todo.isPinned);
    set({ pinnedTodos: pinnedTodos, todos: regularTodos });
  },
}));
