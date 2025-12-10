// Import React for components and hooks.
import * as React from 'react';

// React Navigation: container + bottom tabs.
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// React Native Paper provider (keeps Paper components themed).
import { Provider as PaperProvider } from 'react-native-paper';

// Screens
import PaperScreen from './screens/PaperScreen';
import CoreScreen from './screens/CoreScreen';
import NativeWindScreen from './screens/NativeWindScreen';

// Create a bottom tab navigator instance.
const Tab = createBottomTabNavigator();

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
            component={PaperScreen}
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
