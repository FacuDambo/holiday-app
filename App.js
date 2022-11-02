import France from './src/components/France';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spain from './src/components/Spain';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="France" component={France} />
        <Stack.Screen name="Spain" component={Spain} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
