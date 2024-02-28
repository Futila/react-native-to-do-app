import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
  },

  tasksContainer: {
    flex: 1,
    width: "100%",
    height: 40,
    marginTop: 55,
    paddingHorizontal: 24,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  infoDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  tasksCreated: {
    color: theme.colors.brand.blue,
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.md,
  },

  tasksDone: {
    color: theme.colors.brand.purple,
    fontFamily: theme.font_family.bold,
    fontSize: theme.font_size.md,
  },

  counter: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.base.gray400,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },

  counterText: {
    fontFamily: theme.font_family.bold,
    color: theme.colors.base.gray200,
  },
});
