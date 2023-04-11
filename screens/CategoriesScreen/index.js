import { FlatList } from "react-native";
import { CATEGORIES } from "../../data/data";
import { CategoryGridTile } from "../../components/CategoryGridTile";

export function CategoriesScreen({ navigation }) {
  const renderCategoryItem = (itemData) => {
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}
