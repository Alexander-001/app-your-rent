import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: "900",
    fontFamily: "Onest-Regular",
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    color: "#09f",
    fontWeight: "700",
    marginTop: 5,
    fontFamily: "Onest-Regular",
  },
  contentSendMessage: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#a1a1a1",
    backgroundColor: "#ececec",
    borderRadius: 8,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: "#a1a1a1",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    width: "80%",
    color: "#a1a1a1",
    fontFamily: "Onest-Regular",
  },
  textSend: {
    fontSize: 16,
    fontWeight: "500",
    color: "#424242",
    fontFamily: "Onest-Regular",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  contentIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconCircle: {
    backgroundColor: "#e1e1e1",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
    color: "#333",
    fontFamily: "Onest-Regular",
  },
  divider: {
    height: 1,
    backgroundColor: "#c1c1c1",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Onest-Regular",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#333",
    fontFamily: "Onest-Regular",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  detailKey: {
    fontWeight: "600",
    fontFamily: "Onest-Regular",
  },
  detailValue: {
    fontFamily: "Onest-Regular",
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  locationNote: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Onest-Regular",
  },
  button: {
    backgroundColor: "#09f",
    padding: 10,
    borderRadius: 10,
    width: "18%",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Onest-Regular",
  },
  top20: {
    marginTop: 20,
  },
});
