import React, { FC, useState } from "react";
import { BookStatus } from "../../types/types";
import { BookSheet } from "./BookSheet";

interface IBookItem {
  title: string;
  type: string;
  length: number;
  status: BookStatus;
}

const BookItem: FC<IBookItem> = (props) => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  function handlerSheetShow() {
    if (!isSheetOpen) {
      setIsSheetOpen(true);
    }
  }

  return (
    <div onClick={handlerSheetShow}>
      {props.title}
      {isSheetOpen && (
        <BookSheet
          close={setIsSheetOpen}
          title={props.title}
          length={props.length}
          status={props.status}
          type={props.type}
        />
      )}
    </div>
  );
};

export default BookItem;
