import React from "react";
import ThemesStore from "../../store/ThemesStore";
import { BookStatus, Themes } from "../../types/types";
import ThemeItem from "./ThemeItem";

const style = {
  container: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    gap: "15px",
    width: "100%",
  } as React.CSSProperties,
};

function ThemeList() {
  return (
    <div style={style.container}>
      {ThemesStore.themes.map((el) => (
        <ThemeItem theme={el} />
      ))}
    </div>
  );
}

export default ThemeList;
