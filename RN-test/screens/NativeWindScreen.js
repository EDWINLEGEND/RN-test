// Import React to define components and use state.
import * as React from 'react';

// Import core React Native primitives.
import { View, Text, TextInput, Pressable, SafeAreaView } from 'react-native';

export default function NativeWindScreen() {
  // Simple text state to show live updates.
  const [text, setText] = React.useState('');

  return (
    // SafeAreaView + tailwind classes give us a safe padded area on all devices.
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="flex-1 px-6 py-4">
        {/* Header */}
        <View className="mb-6">
          <Text className="text-3xl font-extrabold text-white">
            NativeWind Demo
          </Text>
          <Text className="text-base text-slate-200 mt-2">
            Tailwind-style classes running inside React Native.
          </Text>
        </View>

        {/* Card-like container */}
        <View className="bg-white/95 rounded-2xl p-6 shadow-lg">
          <Text className="text-lg font-semibold mb-2 text-slate-900">
            Controlled input
          </Text>
          <Text className="text-sm text-slate-600 mb-4">
            Type below to see live updates. Buttons are styled with Tailwind classes.
          </Text>

          <TextInput
            className="w-full border border-slate-200 rounded-lg px-3 py-3 mb-4 text-slate-900"
            placeholder="Type something..."
            placeholderTextColor="#94a3b8"
            value={text}
            onChangeText={setText}
          />

          <Pressable
            className="bg-blue-600 rounded-xl py-3 items-center mb-2"
            onPress={() => console.log('Typed:', text)}
          >
            <Text className="text-white font-semibold">Log to Console</Text>
          </Pressable>

          <Pressable
            className="border border-blue-600 rounded-xl py-3 items-center"
            onPress={() => setText('')}
          >
            <Text className="text-blue-600 font-semibold">Clear</Text>
          </Pressable>
        </View>

        {/* Live text display */}
        <View className="mt-6 bg-slate-800/70 rounded-xl px-4 py-3">
          <Text className="text-slate-100 text-sm mb-1">Live value</Text>
          <Text className="text-white text-lg font-semibold">
            {text || '(empty)'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
