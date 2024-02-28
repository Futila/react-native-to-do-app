import { StatusBar } from "expo-status-bar";

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      {fontsLoaded ? <Home /> : <Loading />}
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </>
  );
}
