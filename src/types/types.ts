export type Themes = {
  id: number;
  title: string;
  content: Book[];
};

export type Book = {
  id: number;
  title: string;
  type: string;
  length: number;
  status: BookStatus;
};

export enum BookStatus {
  NEED_TO_BUY,
  BOUGHT,
  IN_PROGRESS,
  FINISHED,
  NOTES,
}
