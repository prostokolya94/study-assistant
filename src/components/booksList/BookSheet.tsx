import { Button } from "@mui/material";
import React, { FC } from "react";
import ThemesStore from "../../store/ThemesStore";
import { BookStatus } from "../../types/types";

interface IBookSheet {
  title: string;
  type: string;
  length: number;
  status: BookStatus;
  close: (any: boolean) => void;
  id: number;
}

const style = {
  modalWrapper: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    background: "rgba(0, 0, 0, 0.5)",
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

export const BookSheet: FC<IBookSheet> = (props) => {
  return (
    <div style={style.modalWrapper}>
      <div style={style.modalContent}>
        {props.title}
        <Button onClick={(e) => props.close(false)}>Close this window</Button>
        <Button
          color="error"
          onClick={(e) => {
            ThemesStore.removeBook(props.id);
            props.close(false);
          }}
        >
          Delete this book
        </Button>
      </div>
    </div>
  );
};
