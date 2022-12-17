export type Themes = {
  title: string;
  content: Book[];
};

export type Book = {
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
