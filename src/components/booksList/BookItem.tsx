import React, { FC } from "react";
import { BookStatus } from "../../types/types";
import getBooksStatus from "../../utils/utils";

interface IBookItem {
  title: string;
  type: string;
  length: number;
  status: BookStatus;
}

const BookItem: FC<IBookItem> = (props) => {
  return (
    <div>
      {props.title}
      {props.type}
      {props.length}
      {getBooksStatus(props.status)}
    </div>
  );
};

export default BookItem;
