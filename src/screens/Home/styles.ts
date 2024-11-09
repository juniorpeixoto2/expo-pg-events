import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFCFE",
    marginTop: 48,
  },

  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },

  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FDFCFE",
    height: 56,
    padding: 16,
    fontSize: 16,
  },

  button: {
    borderRadius: 5,
    height: 56,
    width: 56,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },
  form: {
    gap: 12,
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
