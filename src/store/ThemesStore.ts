import { makeAutoObservable } from "mobx";
import { BookStatus, Themes } from "../types/types";

const item = localStorage.getItem("themes")!;
let localItem: any;
if (item !== undefined) {
  localItem = JSON.parse(item);
} else {
  localItem = JSON.parse("");
}

class ThemesStore {
  themes: Themes[] = [
    {
      id: 0,
      title: "health",
      content: [
        {
          id: 1,
          title: "a book",
          length: 300,
          status: BookStatus.IN_PROGRESS,
          type: "studybook",
        },
      ],
    },
    {
      title: "history",
      id: 2,
      content: [
        {
          id: 3,
          title: "a history book",
          length: 410,
          status: BookStatus.IN_PROGRESS,
          type: "nonfiction",
        },
        {
          id: 4,
          title: "same history book",
          length: 250,
          status: BookStatus.BOUGHT,
          type: "nonfiction",
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
    if (localItem) {
      this.themes = localItem;
    }
    localStorage.setItem("themes", JSON.stringify(this.themes));
  }

  addTheme(title: string) {
    // this.filterAll();
    let newTheme: Themes = {
      id: Date.now(),
      content: [],
      title: title,
    };
    if (newTheme.title.length > 0) {
      this.themes = this.themes.concat(newTheme);
    }
    localStorage.setItem("themes", JSON.stringify(this.themes));
    localItem = JSON.parse(localStorage.getItem("themes")!);
  }

  //   removeTodo(id: number) {
  //     this.filterAll();
  //     this.themes = this.themes.filter((todo) => todo.id !== id);
  //     localStorage.setItem("todos", JSON.stringify(this.themes));
  //     localItem = JSON.parse(localStorage.getItem("todos")!);
  //   }

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
