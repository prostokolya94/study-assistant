import React, { useEffect, useState } from "react";
import ThemeList from "./components/themesList/ThemesList";
import BookmarkAddTwoToneIcon from "@mui/icons-material/BookmarkAddTwoTone";
import { Typography } from "@mui/material";
import AddTheme from "./components/addComponent/AddTheme";
import { observer } from "mobx-react";
import ThemesStore from "./store/ThemesStore";

const style = {
  appWrapper: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    background: "rgba(198, 128, 238, 0.1)",
  } as React.CSSProperties,
  addButton: {
    display: "flex",
    gap: "15px",
    background: "rgba(198, 128, 238, 0.29)",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  } as React.CSSProperties,
};

function App() {
  const [isAddActive, setIsAddActive] = useState<boolean>(false);
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    setRender((p) => !p);
  }, [ThemesStore.themes]);

  function handlerAddClicked() {
    setIsAddActive((prev) => !prev);
  }

  return (
    <div style={style.appWrapper}>
      <Typography variant="h3">Themes list</Typography>
      <ThemeList />
      {isAddActive ? (
        <AddTheme close={handlerAddClicked} />
      ) : (
        <div style={style.addButton} onClick={handlerAddClicked}>
          <div>add new theme</div>
          <BookmarkAddTwoToneIcon />
        </div>
      )}
    </div>
  );
}

export default observer(App);
