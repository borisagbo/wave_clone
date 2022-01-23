import { StyleSheet, Text, View } from 'react-native';
import Transation from "./src/screens/Transation";
export default function App() {
  return (
    <View style={styles.container}>
  <Transation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
