import { Typography } from "@mui/material";
import React from "react";
import ThemesStore from "../../store/ThemesStore";
import ThemeItem from "./ThemeItem";

const style = {
  container: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    gap: "15px",
    width: "50%",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "15px",
    boxShadow: "4px 4px 8px 0px rgba(198, 128, 238, 0.5)",
    transitionDuration: "1s",
  } as React.CSSProperties,
};

function ThemeList() {
  return (
    <div style={style.container}>
      {ThemesStore.themes.length > 0 ? (
        ThemesStore.themes.map((el) => <ThemeItem theme={el} />)
      ) : (
        <Typography>Lets create your first theme!</Typography>
      )}
    </div>
  );
}

export default ThemeList;
