import React from "react";
import ThemeList from "./components/themesList/ThemesList";

const style = {
  appWrapper: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  } as React.CSSProperties,
};

function App() {
  return (
    <div style={style.appWrapper}>
      <ThemeList />
    </div>
  );
}

export default App;
