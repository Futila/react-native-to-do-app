import { useState, useRef } from "react";
import { Text, View, FlatList, Alert, TextInput } from "react-native";

import uuid from "react-native-uuid";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { TaskDTO } from "../../dtos/task-dto";

export function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([
    { id: "1", title: "Estudar JavaScript", isCompleted: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const taskInputRef = useRef<TextInput>(null);

  function handleAddTask() {
    if (newTask !== "") {
      setTasks([
        ...tasks,
        { id: uuid.v4().toString(), isCompleted: false, title: newTask.trim() },
      ]);

      setNewTask("");

      taskInputRef.current?.blur();

      return;
    }

    Alert.alert("", "O campo está vazio, adicione uma tarefa");
  }

  function handleTaskDone(id: string) {
    setTasks((tasks) =>
      tasks.map((task) => {
        task.id === id ? (task.isCompleted = !task.isCompleted) : null;
        return task;
      })
    );
  }

  function handleTaskDeleted(id: string) {
    Alert.alert(
      "Excluir tarefa",
      "Tem certeza que deseja excluir essa tarefa ?",
      [
        {
          text: "sim",
          onPress: () =>
            setTasks((tasks) => tasks.filter((task) => task.id !== id)),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  const totalCreatedTasks = tasks.length;
  const totalCompletedTasks = tasks.filter(
    (task) => task.isCompleted === true
  ).length;

  return (
    <View style={styles.container}>
      <Header
        onPress={handleAddTask}
        onChangeText={setNewTask}
        task={newTask}
        taskInputRef={taskInputRef}
      />

      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.infoDetails}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{totalCreatedTasks}</Text>
            </View>
          </View>

          <View style={styles.infoDetails}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>{totalCompletedTasks}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id.toString()}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              {...item}
              onTaskDone={handleTaskDone}
              onTaskDeleted={handleTaskDeleted}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
