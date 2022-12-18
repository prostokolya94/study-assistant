import { TextField } from "@mui/material";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import BackspaceTwoToneIcon from "@mui/icons-material/BackspaceTwoTone";
import React, { FC, useState } from "react";
import ThemesStore from "../../store/ThemesStore";

interface IAddTheme {
  close: () => void;
}

const AddTheme: FC<IAddTheme> = ({ close }) => {
  const [currentTitle, setCurrentTitle] = useState<string>("");

  function handleChangeCurrentTitle(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setCurrentTitle(event.target.value);
  }

  function handleSaveClick() {
    ThemesStore.addTheme(currentTitle);
    setCurrentTitle("");
    close();
  }
  return (
    <>
      <TextField
        value={currentTitle}
        placeholder="please enter the title"
        onChange={handleChangeCurrentTitle}
      />
      {currentTitle.length > 0 ? (
        <CheckTwoToneIcon
          onClick={handleSaveClick}
          sx={{ cursor: "pointer" }}
        />
      ) : (
        <BackspaceTwoToneIcon onClick={close} sx={{ cursor: "pointer" }} />
      )}
    </>
  );
};

export default AddTheme;
