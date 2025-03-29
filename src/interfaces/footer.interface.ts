import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface OptionIcons {
  name: string;
  icon: IconDefinition;
}

export enum OptionsName {
  FAVORITES = "Favoritos",
  MESSAGES = "Mensajes",
  EXPLORE = "Explora",
  PROFILE = "Perfil",
}
