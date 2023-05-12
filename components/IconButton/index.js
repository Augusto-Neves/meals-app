import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed, styles.button]}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  button: {
    padding: 16,
  },
});
