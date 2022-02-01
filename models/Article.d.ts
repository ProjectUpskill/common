import { Contributor } from "./Contributor";
import { Version } from "./Version";

export interface Article {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  versions: Version[];
  contributors: Contributor[];
  type: string;
}
