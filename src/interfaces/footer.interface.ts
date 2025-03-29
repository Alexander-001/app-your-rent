import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface OptionIcons {
  name: string;
  icon: IconDefinition;
}

export enum OptionsName {
  HOME = "Inicio",
  FAVORITES = "Favoritos",
  MESSAGES = "Mensajes",
  NOTIFICATIONS = "Notificaciones",
  MENU = "Menú",
}
