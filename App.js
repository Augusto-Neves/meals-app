import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MealsDetailsScreen } from "./screens/MealDetailsScreen";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavoritesScreen } from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { FavoritesContextProvider } from "./store/context/favoritesContext";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#351401",
        },
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "#FFFFFF",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesContextProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#351401",
            },
            cardStyle: {
              backgroundColor: "#3f2f25",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetails" component={MealsDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
