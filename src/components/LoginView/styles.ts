import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 25,
    width: "90%",
  },
  content: {
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Onest-Bold",
  },
  secondTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 5,
    fontFamily: "Onest-Bold",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "Onest-Regular",
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: "#FF6F61",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Onest-Bold",
  },
});
