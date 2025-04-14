import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  fullscreenMap: {
    width,
    height,
  },
  expandButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 25,
    elevation: 3,
  },
  collapseButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 25,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
