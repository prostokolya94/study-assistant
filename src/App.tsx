import React, { useState } from "react";
import ThemeList from "./components/themesList/ThemesList";
import BookmarkAddTwoToneIcon from "@mui/icons-material/BookmarkAddTwoTone";
import { Typography } from "@mui/material";
import AddTheme from "./components/addComponent/AddTheme";

const style = {
  appWrapper: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  } as React.CSSProperties,
};

function App() {
  const [isAddActive, setIsAddActive] = useState<boolean>(false);

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
        <BookmarkAddTwoToneIcon
          onClick={handlerAddClicked}
          sx={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}

export default App;
