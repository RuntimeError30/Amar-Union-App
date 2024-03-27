import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import "react-native-gesture-handler";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Dashboard from "./screens/dashboardRoutes";

const stack = createStackNavigator();

export default function App() {
  // Fonts
  const [fontsloaded] = useFonts({
    hindBold: require("./assets/Fonts/HindSiliguri-Bold.ttf"),
    hindRegular: require("./assets/Fonts/HindSiliguri-Regular.ttf"),
    hindLight: require("./assets/Fonts/HindSiliguri-Light.ttf"),
  });
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={Signup}
        />
        <stack.Screen
          name="Dashboard"
          options={{ headerShown: false }}
          component={Dashboard}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
