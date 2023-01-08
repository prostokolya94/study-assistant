import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React, { FC, useState } from "react";
import ThemesStore from "../../store/ThemesStore";
import { Book, BookStatus } from "../../types/types";

const style = {
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
  } as React.CSSProperties,
};

interface IAddBook {
  themeId: number;
}

const AddBook: FC<IAddBook> = ({ themeId }) => {
  const [currnetTitle, setCurrentTitle] = useState<string>("");
  const [currentType, setCurrentType] = useState<string>("");
  const [currentLenght, setCurrentLenght] = useState<number>(0);
  const [currentStatus, setCurrentStatus] = useState<BookStatus>(0);

  const createdBook: Book = {
    id: Date.now(),
    title: currnetTitle,
    type: currentType,
    length: currentLenght,
    status: currentStatus,
  };

  const validate = () => {
    if (
      currnetTitle.length > 0 &&
      currentType.length > 0 &&
      currentLenght > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  function createBookClick() {
    validate() && ThemesStore.addBook(createdBook, themeId);
    setCurrentLenght(0);
    setCurrentTitle("");
    setCurrentType("");
    setCurrentStatus(0);
  }

  return (
    <div>
      <div style={style.inputContainer}>
        <Typography sx={{ width: "20%" }}>Title</Typography>
        <Typography sx={{ width: "20%" }}>Type</Typography>
        <Typography sx={{ width: "20%" }}>Lenght</Typography>
        <Typography sx={{ width: "20%" }}>Status</Typography>
      </div>
      <div style={style.inputContainer}>
        <TextField
          size="small"
          sx={{ width: "20%" }}
          value={currnetTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
        />
        <TextField
          size="small"
          sx={{ width: "20%" }}
          value={currentType}
          onChange={(e) => setCurrentType(e.target.value)}
        />
        <TextField
          size="small"
          sx={{ width: "20%" }}
          value={currentLenght}
          onChange={(e) => setCurrentLenght(parseInt(e.target.value))}
        />
        <Select
          size="small"
          sx={{ width: "20%" }}
          value={currentStatus}
          onChange={(e) => setCurrentStatus(e.target.value as BookStatus)}
        >
          <MenuItem value={BookStatus.NEED_TO_BUY}>Need to buy</MenuItem>
          <MenuItem value={BookStatus.BOUGHT}>Bought</MenuItem>
          <MenuItem value={BookStatus.IN_PROGRESS}>In progress</MenuItem>
          <MenuItem value={BookStatus.NOTES}>Notes</MenuItem>
          <MenuItem value={BookStatus.FINISHED}>Finished</MenuItem>
        </Select>
      </div>
      <Button onClick={createBookClick}>Create!</Button>
    </div>
  );
};

export default observer(AddBook);
