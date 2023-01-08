import { Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { BookStatus } from "../../types/types";
import { BookSheet } from "./BookSheet";

interface IBookItem {
  title: string;
  type: string;
  length: number;
  status: BookStatus;
  id: number;
  themeId: number;
}

const style = {
  item: {
    cursor: "pointer",
    borderRadius: "3px",
    padding: "5px",
    background: "rgba(198, 128, 238, 0.2)",
    boxShadow: "4px 4px 8px 0px rgba(198, 128, 238, 0.3)",
  } as React.CSSProperties,
  header: {
    display: "flex",
    justifyContent: "center",
  } as React.CSSProperties,
};

const BookItem: FC<IBookItem> = (props) => {
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  function handlerSheetShow() {
    if (!isSheetOpen) {
      setIsSheetOpen(true);
    }
  }

  return (
    <div onClick={handlerSheetShow} style={style.item}>
      <div>
        <Typography variant="h6">{props.title}</Typography>
        <Typography variant="caption">{BookStatus[props.status]}</Typography>
      </div>
      {isSheetOpen && (
        <BookSheet
          close={setIsSheetOpen}
          title={props.title}
          length={props.length}
          status={props.status}
          type={props.type}
          id={props.id}
          themeId={props.themeId}
        />
      )}
    </div>
  );
};

export default BookItem;
