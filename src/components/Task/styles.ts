import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    backgroundColor: theme.colors.base.gray500,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: theme.colors.base.gray400,
  },

  textContainer: {
    width: "80%",
    height: 40,
    alignItems: "flex-start",
    textAlign: "justify",
    justifyContent: "center",
    marginLeft: 8,
  },

  textCreated: {
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray100,
    textDecorationLine: "none",
  },
  textDone: {
    fontSize: theme.font_size.md,
    color: theme.colors.base.gray300,
    textDecorationLine: "line-through",
  },
});
