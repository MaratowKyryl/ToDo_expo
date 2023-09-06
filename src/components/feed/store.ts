import { create } from 'zustand';

import { ITodoItem } from '$components/feed/models';

import { todos } from '../../../dummy-data';

export interface TodoState {
  todos: ITodoItem[] | null;
  fetchTodos: (data: any) => Promise<void>;
}

export const useTodoItemStore = create<TodoState>((set) => ({
  todos: null,
  fetchTodos: async (data) => {
    // const response = fetch(data);
    set({ todos: todos });
  },
}));
