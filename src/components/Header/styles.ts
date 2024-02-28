import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 173,
    backgroundColor: theme.colors.base.gray700,
    position: "relative",
  },
  form: {
    position: "absolute",
    bottom: -54 / 2,
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    gap: 4,
    height: 54,
  },

  input: {
    height: 54,
    backgroundColor: theme.colors.base.gray500,
    flex: 1,
    borderRadius: 6,
    padding: 16,
    color: theme.colors.base.gray100,
  },

  addButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    width: 54,
    backgroundColor: theme.colors.brand.blue_dark,
    borderRadius: 6,
  },

  inputBorder: {
    borderWidth: 1,
    borderColor: theme.colors.brand.purple_dark,
  },
});
