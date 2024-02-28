import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../theme";
import { TaskDTO } from "../../dtos/task-dto";

type TaskProps = TaskDTO & {
  onTaskDone: (id: string) => void;
  onTaskDeleted: (id: string) => void;
};

export function Task({
  id,
  title,
  isCompleted,
  onTaskDeleted,
  onTaskDone,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onTaskDone(id.toString())}>
        <MaterialCommunityIcons
          name={
            isCompleted
              ? "checkbox-marked-circle-outline"
              : "checkbox-blank-circle-outline"
          }
          color={
            isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue
          }
          size={24}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={isCompleted ? styles.textDone : styles.textCreated}>
          {title}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onTaskDeleted(id.toString())}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={theme.colors.base.gray300}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}
