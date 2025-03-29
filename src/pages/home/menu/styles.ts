import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#3d3d3d",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileText: {
    flexDirection: "column",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "#777",
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: "#ff4d4d",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  version: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 14,
    marginTop: 10,
  },
});
