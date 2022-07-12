import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import RestaurantScreen from "./screens/RestaurantScreen";
import HomeScreen from "./screens/HomeScreen";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen
              name="Order Preparation"
              component={PreparingOrderScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
}
