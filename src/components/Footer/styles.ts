import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
    marginBottom: 30,
  },
  option: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  optionText: {
    color: "#666",
    fontSize: 12,
    fontWeight: "500",
    paddingTop: 5,
  },
  selectedText: {
    color: "#ff0000",
  },
  selectionIndicator: {
    position: "absolute",
  },
});
