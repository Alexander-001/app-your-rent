import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Home from "./src/pages/home";
import ProductDetail from "./src/pages/home/explore/search/product-details";
import Login from "./src/pages/home/login";
import Menu from "./src/pages/home/menu";
import HelpCenter from "./src/pages/home/menu/assistance/help-center";
import HowWorks from "./src/pages/home/menu/assistance/how-works";
import SendComments from "./src/pages/home/menu/assistance/send-comments";
import Accessibility from "./src/pages/home/menu/information/accessibility";
import Payments from "./src/pages/home/menu/information/payments";
import PersonalInfo from "./src/pages/home/menu/information/personal-info";
import SecurityLogin from "./src/pages/home/menu/information/security-login";
import Taxes from "./src/pages/home/menu/information/taxes";
import OpenSourceLicenses from "./src/pages/home/menu/legal/open-source-licenses";
import PrivacyPolicy from "./src/pages/home/menu/legal/privacy-policy";
import TermsOfService from "./src/pages/home/menu/legal/terms-of-service";
import Profile from "./src/pages/home/menu/profile";
import EditProfile from "./src/pages/home/menu/profile/edit-profile";
import FindProduct from "./src/pages/home/menu/rents/find-product";
import PushProduct from "./src/pages/home/menu/rents/push-product";
import AppContext from "./src/utils/AppContext";
import { useInitialStateAppContext } from "./src/utils/AppContext/useInitialStateAppContext";

const Routes = () => {
  const initialState = useInitialStateAppContext();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AppContext.Provider value={initialState}>
        <NativeBaseProvider>
          <Stack.Navigator
            screenOptions={{
              headerTitle: "",
              headerBackVisible: false,
              animation: "slide_from_right",
              gestureDirection: "horizontal",
            }}
            initialRouteName="Home"
          >
            {/* Login */}
            <Stack.Screen
              name="Login" //@ts-ignore
              component={Login}
            />
            {/* Home */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="ProductDetail" // @ts-ignore
              component={ProductDetail}
              options={{
                headerBackVisible: true,
                headerBackTitle: "Volver",
              }}
            />
            {/* Menu */}
            <Stack.Screen
              name="Menu" //@ts-ignore
              component={Menu}
              options={{ headerTitle: "Menú" }}
            />
            {/* Profile */}
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerTitle: "Perfil",
                headerBackVisible: true,
                headerBackTitle: "Volver",
              }}
            />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            {/* Information */}
            <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
            <Stack.Screen name="Payments" component={Payments} />
            <Stack.Screen name="Taxes" component={Taxes} />
            <Stack.Screen name="SecurityLogin" component={SecurityLogin} />
            <Stack.Screen name="Accessibility" component={Accessibility} />
            {/* Rents */}
            <Stack.Screen name="PushProduct" component={PushProduct} />
            <Stack.Screen name="FindProduct" component={FindProduct} />
            {/* Assistance */}
            <Stack.Screen name="HelpCenter" component={HelpCenter} />
            <Stack.Screen name="SendComments" component={SendComments} />
            <Stack.Screen name="HowWorks" component={HowWorks} />
            {/* Legal */}
            <Stack.Screen name="TermsOfService" component={TermsOfService} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen
              name="OpenSourceLicenses"
              component={OpenSourceLicenses}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default Routes;
