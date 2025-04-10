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

export type RootStackParamList = {
  Menu: undefined;
  ProductDetail: undefined;
  Home: undefined;
  Profile: undefined;
  EditProfile: undefined;
  PersonalInfo: undefined;
  Payments: undefined;
  Taxes: undefined;
  SecurityLogin: undefined;
  Accessibility: undefined;
  PushProduct: undefined;
  FindProduct: undefined;
  HelpCenter: undefined;
  SendComments: undefined;
  HowWorks: undefined;
  TermsOfService: undefined;
  PrivacyPolicy: undefined;
  OpenSourceLicenses: undefined;
};
