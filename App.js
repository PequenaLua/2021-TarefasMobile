import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primeiro mobile app RN de Lanay Fernandes</Text>
      <Button title="Já sei construir mobile app"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
