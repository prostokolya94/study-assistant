import React from "react";
import { BookStatus, Themes } from "../../types/types";
import ThemeItem from "./ThemeItem";

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    width: "100%",
  } as React.CSSProperties,
};

const themes: Themes[] = [
  {
    title: "health",
    content: [
      {
        title: "a book",
        length: 300,
        status: BookStatus.IN_PROGRESS,
        type: "studybook",
      },
    ],
  },
];
function ThemeList() {
  return (
    <div style={style.container}>
      {themes.map((el) => (
        <ThemeItem theme={el} />
      ))}
    </div>
  );
}

export default ThemeList;
