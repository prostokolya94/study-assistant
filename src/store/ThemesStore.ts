import { makeAutoObservable } from "mobx";
import { Book, BookStatus, Theme } from "../types/types";

const item = localStorage.getItem("themes")!;
let localItem: any;
if (item !== undefined) {
  localItem = JSON.parse(item);
} else {
  localItem = JSON.parse("");
}

class ThemesStore {
  themes: Theme[] = [];

  constructor() {
    makeAutoObservable(this);
    if (localItem) {
      this.themes = localItem;
    }
    localStorage.setItem("themes", JSON.stringify(this.themes));
  }

  addTheme(createdTheme: Theme) {
    // this.filterAll();
    let newTheme: Theme = {
      id: createdTheme.id === -1 ? Date.now() : createdTheme.id,
      content: createdTheme.content,
      title: createdTheme.title,
    };
    if (newTheme.title.length > 0) {
      this.themes = this.themes.concat(newTheme);
    }
    this.setInLocalStorage();
  }

  removeTheme(id: number) {
    this.themes = this.themes.filter((theme) => theme.id !== id);
    this.setInLocalStorage();
  }

  removeBook(id: number) {
    let themeToUpdate: Theme | undefined = this.themes.find((el) =>
      el.content.map((book) => book.id !== id)
    );
    if (themeToUpdate) {
      themeToUpdate.content = themeToUpdate.content.filter(
        (el) => el.id !== id
      );
      this.removeTheme(themeToUpdate.id);
      this.addTheme(themeToUpdate);
    }
  }

  addBook(book: Book, themeId: number) {
    let themeToUpdate: Theme | undefined = this.themes.find(
      (el) => el.id === themeId
    );
    if (themeToUpdate) {
      themeToUpdate.content = themeToUpdate.content.concat(book);
      this.removeTheme(themeId);
      this.addTheme(themeToUpdate);
    }
  }
  setInLocalStorage() {
    localStorage.setItem("themes", JSON.stringify(this.themes));
    localItem = JSON.parse(localStorage.getItem("themes")!);
  }

  //   completeTodo(id: number) {
  //     this.themes = this.themes.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     );
  //     localStorage.setItem("todos", JSON.stringify(this.themes));
  //     localItem = JSON.parse(localStorage.getItem("todos")!);
  //   }

  //   filterCompleted() {
  //     this.themes = localItem;
  //     this.themes = this.themes.filter((el) => el.completed === true);
  //     localItem = JSON.parse(localStorage.getItem("todos")!);
  //   }
  //   filterActive() {
  //     this.themes = localItem;
  //     this.themes = this.themes.filter((el) => el.completed === false);
  //     localItem = JSON.parse(localStorage.getItem("todos")!);
  //   }

  //   filterAll() {
  //     this.themes = localItem;
  //     localItem = JSON.parse(localStorage.getItem("todos")!);
  //   }
}

export default new ThemesStore();
