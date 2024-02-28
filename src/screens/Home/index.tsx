import { Text, View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.infoDetails}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>

          <View style={styles.infoDetails}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counter}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
