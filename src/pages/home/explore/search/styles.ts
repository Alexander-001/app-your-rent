import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  containerSuggestions: {
    marginVertical: 10,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  suggestionsText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 10,
  },
  suggestionMap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textLocation: {
    color: "#09f",
    fontSize: 16,
    fontWeight: "400",
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
