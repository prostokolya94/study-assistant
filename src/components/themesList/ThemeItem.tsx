import React, { FC, useState } from "react";
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
        theme.content.map((el) => (
          <BookItem
            length={el.length}
            status={el.status}
            title={el.title}
            type={el.type}
          />
        ))}
    </>
  );
};

export default ThemeItem;
