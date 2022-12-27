import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import ThemesStore from "../../store/ThemesStore";
import { Themes } from "../../types/types";
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
  theme: Themes;
}

const ThemeItem: FC<IThemeItem> = ({ theme }) => {
  const [isBooksShow, setIsBooksShow] = useState<boolean>(false);

  function handlerThemeOpen() {
    setIsBooksShow((prev) => !prev);
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
          theme.content.map((el) => (
            <BookItem
              length={el.length}
              status={el.status}
              title={el.title}
              type={el.type}
            />
          ))
        ) : (
          <>
            <Typography>There are no books...yet</Typography>
            <Button size="small" sx={{ color: "rgba(198, 128, 238, 1)" }}>
              Let's fix this!
            </Button>
          </>
        ))}
      {isBooksShow && (
        <Button
          size="small"
          color="error"
          onClick={(e) => ThemesStore.removeTheme(theme.id)}
        >
          Remove this theme
        </Button>
      )}
    </>
  );
};

export default observer(ThemeItem);
