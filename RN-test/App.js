// Import React so we can use components and useState.
import * as React from 'react';

// PaperProvider gives theming & context to React Native Paper components.
import { Provider as PaperProvider, Button, Text } from 'react-native-paper';

// SafeAreaView keeps UI away from notches & status bar.
import { SafeAreaView, View } from 'react-native';

// Import our two screens.
import PaperScreen from './screens/PaperScreen';
import CoreScreen from './screens/CoreScreen';

export default function App() {
  // activeScreen controls which screen we show.
  // It can be 'paper' or 'core'.
  const [activeScreen, setActiveScreen] = React.useState('paper');

  // This small function decides which screen to render based on activeScreen.
  const renderScreen = () => {
    if (activeScreen === 'paper') {
      return <PaperScreen />;
    }
    return <CoreScreen />;
  };

  return (
    // Wrap everything in PaperProvider so Paper components work properly.
    <PaperProvider>
      {/* Safe area to avoid notch/status bar overlap */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Top "tab" buttons to switch between screens */}
        <View
          style={{
            flexDirection: 'row',              // place buttons side by side
            justifyContent: 'space-around',    // even spacing
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderColor: '#ddd',
          }}
        >
          {/* Button to select Paper screen */}
          <Button
            mode={activeScreen === 'paper' ? 'contained' : 'outlined'}
            onPress={() => setActiveScreen('paper')}
          >
            Paper UI
          </Button>

          {/* Button to select Core React Native screen */}
          <Button
            mode={activeScreen === 'core' ? 'contained' : 'outlined'}
            onPress={() => setActiveScreen('core')}
          >
            Core RN
          </Button>
        </View>

        {/* Screen title (optional) */}
        <View style={{ padding: 10 }}>
          <Text variant="titleMedium">
            {activeScreen === 'paper'
              ? 'React Native Paper Screen'
              : 'Core React Native Screen'}
          </Text>
        </View>

        {/* Render the selected screen below */}
        <View style={{ flex: 1 }}>
          {renderScreen()}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
