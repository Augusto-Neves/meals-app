// import { useContext } from "react";
// import { FavoritesContext } from "../../store/context/favoritesContext";
import { MealsList } from "../../components/MealsList";
import { MEALS } from "../../data/data";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

export function FavoritesScreen() {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMeals = useSelector((state) => state.favoriteMeals.ids)
  const favorites = MEALS.filter((meal) =>
    favoriteMeals.includes(meal.id)
  );

  if (favorites.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites meals yet!</Text>
      </View>
    );
  }

  return <MealsList items={favorites} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
