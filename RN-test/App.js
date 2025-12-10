import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';

// Screens
import PaperScreen from './screens/PaperScreen';
import CoreScreen from './screens/CoreScreen';
import NativeWindScreen from './screens/NativeWindScreen';

export default function App() {
  // Which screen is active: 'paper', 'core', or 'nativewind'
  const [activeScreen, setActiveScreen] = React.useState('nativewind');

  // Decide which screen to render
  const renderScreen = () => {
    if (activeScreen === 'paper') return <PaperScreen />;
    if (activeScreen === 'core') return <CoreScreen />;
    return <NativeWindScreen />; // default
  };

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Top navigation buttons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: '#ddd',
          }}
        >
          <Button
            mode={activeScreen === 'paper' ? 'contained' : 'outlined'}
            onPress={() => setActiveScreen('paper')}
          >
            Paper UI
          </Button>

          <Button
            mode={activeScreen === 'core' ? 'contained' : 'outlined'}
            onPress={() => setActiveScreen('core')}
          >
            Core RN
          </Button>

          <Button
            mode={activeScreen === 'nativewind' ? 'contained' : 'outlined'}
            onPress={() => setActiveScreen('nativewind')}
          >
            NativeWind
          </Button>
        </View>

        {/* Title */}
        <View style={{ padding: 10 }}>
          <Text variant="titleMedium">
            {activeScreen === 'paper'
              ? 'React Native Paper Screen'
              : activeScreen === 'core'
              ? 'Core React Native Screen'
              : 'NativeWind Screen'}
          </Text>
        </View>

        {/* Main content */}
        <View style={{ flex: 1 }}>
          {renderScreen()}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
