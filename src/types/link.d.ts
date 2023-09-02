import { LinkType as LinkTypeReact } from "react-icons";
export type LinkType = {
  id: string;
  icon?: LinkTypeReact;
  title: string;
  linkTo: string;
};
