// Import React to define components and use state.
import * as React from 'react';

// Import core React Native primitives.
import { View, Text, TextInput, Pressable } from 'react-native';

export default function NativeWindScreen() {
  // Simple text state to show live updates.
  const [text, setText] = React.useState('');

  return (
    // This root View uses Tailwind classes via NativeWind:
    // red background, full height, centered content, padding.
    <View className="flex-1 bg-red-500 justify-center items-center p-8">

      {/* Big bold title */}
      <Text className="text-3xl font-extrabold text-white mb-6">
        NativeWind Test
      </Text>

      {/* Card-like container */}
      <View className="w-full bg-white rounded-2xl p-6 shadow-lg">
        <Text className="text-lg font-semibold mb-3 text-gray-800">
          Tailwind-style styling in React Native
        </Text>

        {/* Text input styled with Tailwind */}
        <TextInput
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
          placeholder="Type something..."
          value={text}
          onChangeText={setText}
        />

        {/* Button using Pressable + Tailwind */}
        <Pressable
          className="bg-blue-600 rounded-lg py-3 items-center mb-2"
          onPress={() => console.log('Typed:', text)}
        >
          <Text className="text-white font-semibold">
            Log to Console
          </Text>
        </Pressable>

        {/* Secondary outlined button */}
        <Pressable
          className="border border-blue-600 rounded-lg py-3 items-center"
          onPress={() => setText('')}
        >
          <Text className="text-blue-600 font-semibold">
            Clear
          </Text>
        </Pressable>
      </View>

      {/* Live text display */}
      <Text className="mt-6 text-white text-lg">
        Current value: {text || '(empty)'}
      </Text>
    </View>
  );
}
