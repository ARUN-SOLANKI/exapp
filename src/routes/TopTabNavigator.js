import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native-paper';
import About from '../screens/About';
import Camera from '../screens/About copy';
import Home from '../screens/Home';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarLabelStyle: { fontSize: 15, marginTop:30, fontWeight:'500' },
      tabBarStyle: { backgroundColor: '#F20078' },
      tabBarActiveTintColor :'#fff',
      tabBarInactiveTintColor : '#ccc',
      tabBarIndicatorStyle : {backgroundColor:'#fff',},
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="camera" component={Camera} />
      <Tab.Screen name="about" component={About} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator