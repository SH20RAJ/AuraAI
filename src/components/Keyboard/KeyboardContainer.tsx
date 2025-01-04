import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import KeyboardLayout from './KeyboardLayout';
import SuggestionBar from './SuggestionBar';
import { KeyboardManager } from '../../services/KeyboardManager';
import { useTheme } from '../../hooks/useTheme';

interface KeyboardContainerProps {
  onTextChange?: (text: string) => void;
}

const KeyboardContainer: React.FC<KeyboardContainerProps> = ({ onTextChange }) => {
  const theme = useTheme();
  const [keyboardManager] = useState(() => new KeyboardManager());
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleKeyPress = async (key: string) => {
    const newText = await keyboardManager.handleKeyPress(key);
    onTextChange?.(newText);
    updateSuggestions();
  };

  const handleSuggestionPress = (suggestion: string) => {
    keyboardManager.insertSuggestion(suggestion);
    onTextChange?.(keyboardManager.getCurrentText());
    updateSuggestions();
  };

  const updateSuggestions = () => {
    const currentWord = keyboardManager.getWordAtCursor();
    // In a real app, you would call your prediction service here
    const mockSuggestions = ['Hello', 'Hey', 'Hi there', 'How are you', 'Good morning'];
    setSuggestions(mockSuggestions);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <SuggestionBar
        suggestions={suggestions}
        onSuggestionPress={handleSuggestionPress}
      />
      <KeyboardLayout onKeyPress={handleKeyPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default KeyboardContainer;
