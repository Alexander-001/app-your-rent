import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Home from "./src/pages/home";
import Login from "./src/pages/login";
import AppContext from "./src/utils/AppContext";
import { useInitialStateAppContext } from "./src/utils/AppContext/useInitialStateAppContext";

const Routes = () => {
  const initialState = useInitialStateAppContext();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          primary: "",
          background: "",
          card: "",
          text: "",
          border: "",
          notification: "",
        },
        fonts: {
          regular: { fontWeight: "100", fontFamily: "" },
          medium: { fontWeight: "100", fontFamily: "" },
          bold: { fontWeight: "100", fontFamily: "" },
          heavy: { fontWeight: "100", fontFamily: "" },
        },
      }}
    >
      <AppContext.Provider value={initialState}>
        <NativeBaseProvider>
          <Stack.Navigator
            screenOptions={{
              headerTitle: "",
              headerBackVisible: false,
            }}
            initialRouteName="Home"
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NativeBaseProvider>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default Routes;
