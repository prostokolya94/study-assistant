import { Button, MenuItem, Select, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import ThemesStore from "../../store/ThemesStore";
import { Book, BookStatus } from "../../types/types";

interface IBookSheet {
  title: string;
  type: string;
  length: number;
  status: BookStatus;
  close: (any: boolean) => void;
  id: number;
  themeId: number;
}

const style = {
  modalWrapper: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    background: "rgba(51, 1, 47, 0.219)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "50",
  } as React.CSSProperties,
  modalContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    background: "white",
    height: "50%",
    width: "50%",
    padding: "30px",
    gap: "15px",
  } as React.CSSProperties,
};

export const BookSheet: FC<IBookSheet> = ({
  close,
  id,
  length,
  status,
  title,
  type,
  themeId,
}) => {
  const [currentStatus, setCurrentStatus] = useState<BookStatus>(0);

  const updatedBook: Book = {
    id: id,
    length: length,
    title: title,
    type: type,
    status: currentStatus,
  };

  return (
    <div style={style.modalWrapper}>
      <div style={style.modalContent}>
        <Typography>Book title: {title}</Typography>
        <Typography>Type: {type}</Typography>
        <Typography>Pages: {length}</Typography>
        <Select
          size="small"
          sx={{ width: "30%" }}
          defaultValue={status}
          onChange={(e) => setCurrentStatus(e.target.value as BookStatus)}
        >
          <MenuItem value={BookStatus.NEED_TO_BUY}>Need to buy</MenuItem>
          <MenuItem value={BookStatus.BOUGHT}>Bought</MenuItem>
          <MenuItem value={BookStatus.IN_PROGRESS}>In progress</MenuItem>
          <MenuItem value={BookStatus.NOTES}>Notes</MenuItem>
          <MenuItem value={BookStatus.FINISHED}>Finished</MenuItem>
        </Select>
        <div>
          {" "}
          <Button
            onClick={(e) => {
              ThemesStore.removeBook(id);
              ThemesStore.addBook(updatedBook, themeId);
              close(false);
            }}
          >
            Close this window
          </Button>
          <Button
            color="error"
            onClick={(e) => {
              ThemesStore.removeBook(id);
              close(false);
            }}
          >
            Delete this book
          </Button>
        </div>
      </div>
    </div>
  );
};
