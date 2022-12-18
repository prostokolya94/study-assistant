import { BookStatus } from "../types/types";

export default function getBooksStatus(id: BookStatus) {
  if (id === BookStatus.NEED_TO_BUY) {
    return "need to buy";
  } else if (id === BookStatus.BOUGHT) {
    return "bought";
  } else if (id === BookStatus.IN_PROGRESS) {
    return "in progress";
  } else if (id === BookStatus.FINISHED) {
    return "finished";
  } else {
    return "notes";
  }
}
