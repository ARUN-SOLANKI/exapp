import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import TopTabNavigator from './TopTabNavigator';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="signup" component={Signup} options={{headerShown: false}} />
      <Stack.Screen name="main" component={TopTabNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default StackNavigator