import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import PaperScreen from './screens/PaperScreen';
import CoreScreen from './screens/CoreScreen';
import NativeWindScreen from './screens/NativeWindScreen';
import DetailsScreen from './screens/DetailsScreen'; // new

// Create a bottom tab navigator instance.
const Tab = createBottomTabNavigator();
const PaperStack= createNativeStackNavigator(); 

function PaperStackNavigator(){
  return (
    <PaperStack.Navigator>
      <PaperStack.Screen name="Paper" component={PaperScreen} />
      <PaperStack.Screen name="Details" component={DetailsScreen} />
    </PaperStack.Navigator>
  );
}

export default function App() {
  return (
    // PaperProvider wraps the app so Paper components have theme/context.
    <PaperProvider>
      {/* NavigationContainer manages navigation state for the whole app. */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            tabBarActiveTintColor: '#6750A4', // Paper default primary
          }}
        >
          <Tab.Screen
  name="Paper"
  component={PaperStackNavigator}
  options={{ title: 'Paper UI' }}
/>
          <Tab.Screen
            name="Core"
            component={CoreScreen}
            options={{ title: 'Core RN' }}
          />
          <Tab.Screen
            name="NativeWind"
            component={NativeWindScreen}
            options={{ title: 'NativeWind' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
