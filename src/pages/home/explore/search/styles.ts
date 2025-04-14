import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  containerSuggestions: {
    marginVertical: 10,
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  suggestionsContainer: {
    display: "flex",
    width: "50%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationText: {
    color: "#09f",
    fontSize: 14,
    paddingLeft: 10,
  },
  suggestionsText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
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
  },
});
