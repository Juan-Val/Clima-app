import { StyleSheet, View } from "react-native";
import { AppBar } from "./src/components/AppBar";
import { Card } from "./src/components/Card";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { Main } from "./src/components/Main";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppBar />
        <Card />
        <Main />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
    fontWeight: "bold",
    margin: 15,
  },
  fondo: {
    flex: 1,
    justifyContent: "center",
  },
});
