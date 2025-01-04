import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useTheme } from '../../hooks/useTheme';

interface SuggestionBarProps {
  suggestions: string[];
  onSuggestionPress: (suggestion: string) => void;
}

const SuggestionBar: React.FC<SuggestionBarProps> = ({
  suggestions,
  onSuggestionPress,
}) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {suggestions.map((suggestion, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.suggestionItem,
              { backgroundColor: theme.suggestionBackground },
            ]}
            onPress={() => onSuggestionPress(suggestion)}
          >
            <Text
              style={[styles.suggestionText, { color: theme.suggestionText }]}
              numberOfLines={1}
            >
              {suggestion}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC',
  },
  scrollContent: {
    paddingHorizontal: 8,
    alignItems: 'center',
    height: '100%',
  },
  suggestionItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default SuggestionBar;
