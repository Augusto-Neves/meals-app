import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../../data/data";
import { MealDetails } from "../../components/MealDetails";
import { Subtitle } from "../../components/Subtitle";
import { List } from "../../components/List";
import { useContext, useLayoutEffect } from "react";
import { IconButton } from "../../components/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, addFavorite } from "../../store/redux/favorites.slice";
// import { FavoritesContext } from "../../store/context/favoritesContext";

export function MealsDetailsScreen({ route, navigation }) {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsContext.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
      title: "Details",
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{
          uri: selectedMeal.imageUrl,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
