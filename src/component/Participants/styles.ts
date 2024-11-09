import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,

    padding: 6,
  },
  name: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 16,
  },
  button: {
    borderRadius: 5,
    height: 56,
    width: 56,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },
});
