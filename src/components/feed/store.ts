import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

import Constants from '../../common/utils/Constants';
import { ITodoItem } from './models';

export interface TodoState {
  pinnedTodos: ITodoItem[] | null;
  todos: ITodoItem[] | null;
  setTodos: (data: ITodoItem[]) => void;
  updateTodos: (todo: ITodoItem) => void;
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
  updateTodos: (newTodo: ITodoItem) =>
    set((state) => {
      const id = newTodo.id;
      const updatedPinnedTodos = state.pinnedTodos?.map((todo) => {
        if (todo.id === id) {
          return newTodo;
        }
        return todo;
      });
      const updatedTodos = state.todos?.map((todo) => {
        if (todo.id === id) {
          return newTodo;
        }
        return todo;
      });

      if (!updatedPinnedTodos || !updatedTodos) {
        return { pinnedTodos: state.pinnedTodos, todos: state.todos };
      }

      AsyncStorage.setItem(Constants.TODOS_STORAGE_KEY, JSON.stringify([...updatedPinnedTodos, ...updatedTodos]));
      return { pinnedTodos: updatedPinnedTodos, todos: updatedTodos };
    }),
}));
