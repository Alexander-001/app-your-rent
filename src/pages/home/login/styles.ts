import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  contentHead: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "Onest-Regular",
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#606060",
    textAlign: "center",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#ff0000",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 20,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerText: {
    fontSize: 16,
    marginTop: 10,
  },
  register: {
    textDecorationLine: "underline",
    color: "#09f",
    fontWeight: "bold",
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  icon: {
    color: "#3d3d3d",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
