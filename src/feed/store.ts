import {create} from "zustand";
import { todos } from '../../dummy-data/index';


interface ITodoItem {
    title: string,
    completed: boolean,
    isPinned: boolean,
    memo: string | null
};

export const useTodoItemStore = create((set) => ({
    todos: null,
    fetchTodos: async (data) => {
        // const response = fetch(data);
        set({todos: todos})
    }
}))
