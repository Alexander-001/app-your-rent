import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  productCard: {
    width: "49%",
    aspectRatio: 0.9,
    marginBottom: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  productImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 8,
  },
  productPrice: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  productName: {
    color: "#fff",
    fontSize: 13,
    marginTop: 2,
  },
});
