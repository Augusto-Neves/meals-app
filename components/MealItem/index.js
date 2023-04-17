import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { MealDetails } from "../MealDetails";

export function MealItem({
  id,
  title,
  imgUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate("MealDetails", { mealId: id });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => {
          pressed ? styles.buttonPressed : null;
        }}
        onPress={handleNavigation}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imgUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
