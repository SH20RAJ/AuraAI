import React, { useState } from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from './src/themes/ThemeContext';
import KeyboardContainer from './src/components/Keyboard/KeyboardContainer';
import { useTheme } from './src/hooks/useTheme';

const MainApp = () => {
  const [text, setText] = useState('');
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TextInput
        style={[styles.input, { color: theme.text, backgroundColor: theme.keyBackground }]}
        value={text}
        onChangeText={setText}
        multiline
        placeholder="Start typing..."
        placeholderTextColor={theme.text}
      />
      <KeyboardContainer onTextChange={setText} />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <MainApp />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});
