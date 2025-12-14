// screens/DetailsScreen.js
import * as React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

export default function DetailsScreen({ route }) {
  const { name = '(no name provided)' } = route.params || {};

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Card>
        <Card.Title title="Details Screen" />
        <Card.Content>
          <Text style={{ fontSize: 16 }}>You typed: {name}</Text>
          <Text style={{fontsize:12}}>This screen is navigated to from the Paper screen.</Text>
        </Card.Content>
      </Card>
    </View>
  );
}