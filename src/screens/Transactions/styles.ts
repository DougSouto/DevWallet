import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    gap: 22,
    backgroundColor: "#0f172a",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Inter_700Bold",
    color: "#fff",
    fontSize: 22,
  },
  topo: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  textInput: {
    width: "100%",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#006EB7",
    color: "#FFF",
    padding: 22,
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
  text: {
    color: "#fff",
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
  placeholder: {
    fontFamily: "Inter_300Light",
    fontSize: 16,
    color: "#006EB7",
    opacity: 0.4,
  },
  add: {
    backgroundColor: "#1E293B",
    padding: 22,
    width: "100%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#4CC522",
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
  cancel: {
    backgroundColor: "#B2291C",
    padding: 22,
    width: "100%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelText: {
    color: "#fff",
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
  viewBox: { gap: 12, width: "100%" },
  singleTransaction: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1E293BF2",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16
  },
  typeImg: {},
  description: {
    flexGrow: 1,
    fontSize: 20,
    color: "#fff",
  },
  value: { fontSize: 16, color: "#fff" },
  transactions: {
    width: "100%"
  }
});