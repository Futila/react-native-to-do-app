import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

import logo from "../../assets/logo.png";
import { theme } from "../../theme";

interface HeaderProps {
  task: string;
  onPress: () => void;
  onChangeText: (task: string) => void;
  taskInputRef: React.RefObject<TextInput>;
}

export function Header({
  task,
  onChangeText,
  onPress,
  taskInputRef,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>
        <TextInput
          style={[
            styles.input,
            taskInputRef.current?.isFocused() && task
              ? styles.inputBorder
              : null,
          ]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors.base.gray300}
          onChangeText={onChangeText}
          value={task}
          ref={taskInputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={22}
            color={theme.colors.base.gray100}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
