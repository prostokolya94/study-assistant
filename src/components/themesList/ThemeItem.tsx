import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import ThemesStore from "../../store/ThemesStore";
import { Theme } from "../../types/types";
import AddBook from "../addComponent/AddBook";
import BookItem from "../booksList/BookItem";

const style = {
  item: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
  } as React.CSSProperties,
};

interface IThemeItem {
  theme: Theme;
}

const ThemeItem: FC<IThemeItem> = ({ theme }) => {
  const [isBooksShow, setIsBooksShow] = useState<boolean>(false);
  const [isBooksCreating, setIsBooksCreating] = useState<boolean>(false);

  function handlerThemeOpen() {
    setIsBooksShow((prev) => !prev);
  }

  function handlerBookCreating() {
    setIsBooksCreating((prev) => !prev);
  }

  return (
    <>
      <div style={style.item}>
        <h4 style={{ cursor: "pointer" }} onClick={handlerThemeOpen}>
          {theme.title}
        </h4>
      </div>
      {isBooksShow &&
        (theme.content.length > 0 ? (
          theme.content.map((el, idx) => (
            <BookItem
              key={idx}
              length={el.length}
              status={el.status}
              title={el.title}
              type={el.type}
              id={el.id}
            />
          ))
        ) : (
          <>
            <Typography>There are no books...yet</Typography>
            <Button
              size="small"
              sx={{ color: "rgba(198, 128, 238, 1)" }}
              onClick={handlerBookCreating}
            >
              {isBooksCreating ? "Cancel" : "Let's fix this!"}
            </Button>
          </>
        ))}
      {isBooksCreating && <AddBook themeId={theme.id} />}
      {isBooksShow && (
        <>
          {theme.content.length > 0 && (
            <Button size="small" color="info" onClick={handlerBookCreating}>
              {isBooksCreating ? "Cancel" : "Add new book"}
            </Button>
          )}

          <Button
            size="small"
            color="error"
            onClick={(e) => ThemesStore.removeTheme(theme.id)}
          >
            Remove this theme
          </Button>
        </>
      )}
    </>
  );
};

export default observer(ThemeItem);
