import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface MenuData {
  key: string;
  title: string;
  data: Data[];
}

interface Data {
  name: string;
  icon?: IconDefinition;
  isProfile?: boolean;
}
