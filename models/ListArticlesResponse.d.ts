import { Article } from "./Article";

export interface ListArticlesResponse {
  articles: Article[];
  count: number;
}
