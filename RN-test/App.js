// Import React for components and hooks.
import * as React from 'react';

// Import PaperProvider, Button, Text from React Native Paper.
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';
import NativeWindScreen from './screens/NativeWindScreen';


// Import SafeAreaView and View from core React Native.
import { SafeAreaView, View } from 'react-native';

// Import only the screens that actually exist.
import PaperScreen from './screens/PaperScreen';
import CoreScreen from './screens/CoreScreen';

export default function App() {
  // State that controls which screen is visible.
  // Possible values: 'paper' or 'core'.
  const [activeScreen, setActiveScreen] = React.useState('paper');

  // Decide which screen component to render.
  const renderScreen = () => {
    if (activeScreen === 'paper') return <PaperScreen />;
if (activeScreen === 'core') return <CoreScreen />;
if (activeScreen === 'nativewind') return <NativeWindScreen />;

  };

  return (
    // Wrap everything in PaperProvider so Paper components work correctly.
    <PaperProvider>
      {/* Safe area container for the whole app */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Top bar with two buttons to switch screens */}
        
        <View
          style={{
            flexDirection: 'row',           // place buttons horizontally
            justifyContent: 'space-around', // even spacing
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: '#ddd',
          }}
        >
          <Button
  mode={activeScreen === 'nativewind' ? 'contained' : 'outlined'}
  onPress={() => setActiveScreen('nativewind')}
>
  NativeWind
</Button>

          {/* Button to show the Paper UI screen */}
          <Button
            mode={activeScreen === 'paper' ? 'contained' : 'outlined'}
            onPress={() => setActiveScreen('paper')}
          >
            Paper UI
          </Button>

          {/* Button to show the Core React Native screen */}
          <Button
            mode={activeScreen === 'core' ? 'contained' : 'outlined'}
            onPress={() => setActiveScreen('core')}
          >
            Core RN
          </Button>
        </View>

        {/* Title area that changes based on active screen */}
        <View style={{ padding: 10 }}>
        <Text variant="titleMedium">
  {activeScreen === 'paper'
    ? 'React Native Paper Screen'
    : activeScreen === 'core'
    ? 'Core React Native Screen'
    : 'NativeWind Screen'}
</Text>

          
        </View>

        {/* Main content: render selected screen */}
        <View style={{ flex: 1 }}>
          {renderScreen()}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
