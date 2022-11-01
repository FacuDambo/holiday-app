import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import France from './src/components/France';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spain from './src/components/Spain';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen name="France" component={France} />
        <Stack.Screen name="Spain" component={Spain} />
      </Stack.Navigator>
    </NavigationContainer>
  )
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
