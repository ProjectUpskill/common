import { Contributor } from "./Contributor";
import { Version } from "./Version";

export enum ArticleType {
  Article = "article",
  Page = "page",
}

export interface Article {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  versions: Version[];
  contributors: Contributor[];
  type: ArticleType;
}
