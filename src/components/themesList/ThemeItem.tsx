import React, { FC } from "react";
import { Themes } from "../../types/types";

const style = {
  item: {
    width: "80%",
    display: "flex",
  } as React.CSSProperties,
};

interface IThemeItem {
  theme: Themes;
}

const ThemeItem: FC<IThemeItem> = ({ theme }) => {
  return <div style={style.item}>{theme.title}</div>;
};

export default ThemeItem;
