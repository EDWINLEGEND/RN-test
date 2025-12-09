// Import React for component creation.
import * as React from 'react';

// Import core RN components.
import { View, Text, TextInput, Pressable } from 'react-native';

export default function NativeWindScreen() {
  // Simple piece of state for demonstration.
  const [text, setText] = React.useState('');

  return (
    // Tailwind classes work using className with NativeWind.
    <View className="flex-1 bg-gray-100 justify-center items-center p-6">

      {/* Title */}
      <Text className="text-2xl font-bold mb-4 text-blue-600">
        NativeWind (Tailwind CSS)
      </Text>

      {/* Styled input */}
      <TextInput
        className="w-full bg-white border border-gray-300 rounded-lg p-3 mb-4"
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />

      {/* Styled button */}
      <Pressable
        className="bg-blue-500 p-3 rounded-lg w-full items-center"
        onPress={() => console.log(text)}
      >
        <Text className="text-white font-semibold">Log Text</Text>
      </Pressable>

      {/* Live preview text */}
      <Text className="mt-6 text-lg text-gray-700">
        Typed: {text}
      </Text>
    </View>
  );
}
