// Import React because we are writing a component.
// Also importing useState through React.
import * as React from 'react';

// SafeAreaView makes sure UI doesn't get hidden behind notches/status bars.
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Import UI components from React Native Paper.
// These are NOT the default RN components.
import {
  Text,
  Card,
  TextInput,
  Button,
} from 'react-native-paper';

export default function PaperScreen() {
  // useState: this creates "name" and a function "setName" to update it.
  // Default value is an empty string.
  const [name, setName] = React.useState('');
  const navigation = useNavigation();
  return (
    // SafeAreaView wraps UI safely inside visible screen space.
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      
      {/* Card component: like a container with shadow & padding */}
      <Card style={{ marginBottom: 20 }}>
        {/* Card title: shows title + subtitle */}
        <Card.Title title="React Native Paper" subtitle="UI Test Screen" />

        {/* Card content: where the inside components go */}
        <Card.Content>
          
          {/* TextInput: controlled input linked to our state "name" */}
          <TextInput
            label="Enter your name"
            value={name}
            onChangeText={setName}  // updates "name" state whenever user types
            style={{ marginBottom: 12 }}
          />

                    {/* Button: logs the value typed in the TextInput */}
                    <Button 
            mode="contained" 
            onPress={() => console.log('Hello ' + name)}
          >
            Log Name
          </Button>

          {/* Button: navigates to Details screen and passes the name */}
          <Button
            mode="outlined"
            style={{ marginTop: 12 }}
            onPress={() => navigation.navigate('Details', { name })}
          >
            Go to Details
          </Button>
        </Card.Content>
      </Card>

      {/* Shows live text from the "name" state */}
      <Text variant="headlineSmall">Typed: {name}</Text>
    </SafeAreaView>
  );
}
