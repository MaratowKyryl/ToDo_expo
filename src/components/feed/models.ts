export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
  isPinned: boolean;
  memo: string | null;
}
