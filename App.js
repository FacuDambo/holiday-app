import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main></Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
