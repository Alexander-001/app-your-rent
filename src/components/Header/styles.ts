import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  searchInput: {
    height: 50,
    borderWidth: 1,
    fontSize: 15,
    borderColor: "#e6e6e6",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  optionsContainer: {
    flexDirection: "row",
    gap: 32,
    paddingBottom: 4,
    position: "relative",
  },
  selectionIndicator: {
    position: "absolute",
    bottom: 0,
    height: 2,
    backgroundColor: "#000",
    width: 0,
  },
  option: {
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  optionText: {
    color: "#666",
    fontSize: 12,
    fontWeight: "500",
    paddingBottom: 8,
  },
  selectedText: {
    color: "#000",
    fontWeight: "600",
  },
});
