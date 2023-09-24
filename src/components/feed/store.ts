import { create } from 'zustand';

import { todos } from '../../../dummy-data';
import { ITodoItem } from './models';

export interface TodoState {
  pinnedTodos: ITodoItem[] | null;
  todos: ITodoItem[] | null;
  fetchTodos: (data: any) => Promise<void>;
}

export const useTodoItemStore = create<TodoState>((set) => ({
  pinnedTodos: null,
  todos: null,
  fetchTodos: async (data) => {
    // const response = fetch(data);

    const pinnedTodos = todos.filter((todo) => todo.isPinned);
    const regularTodos = todos.filter((todo) => !todo.isPinned);
    set({ pinnedTodos: pinnedTodos, todos: regularTodos });
  },
}));
