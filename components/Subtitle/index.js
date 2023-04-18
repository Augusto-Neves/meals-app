import { View, Text, StyleSheet } from "react-native";

export function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
