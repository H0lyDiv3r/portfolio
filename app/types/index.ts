import { JSX } from "react";


export type Project = {
  title: string;
  desc: string;
  url: string;
  icon: JSX.Element;
  tags: string[];
  grid: string;
}
