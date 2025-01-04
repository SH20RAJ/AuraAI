import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../../hooks/useTheme';

interface KeyProps {
  label: string;
  onPress: (key: string) => void;
  width?: number;
  special?: boolean;
}

const Key: React.FC<KeyProps> = ({ label, onPress, width = 1, special = false }) => {
  const theme = useTheme();

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress(label);
  };

  return (
    <TouchableOpacity
      style={[
        styles.key,
        {
          width: `${width * 10}%`,
          backgroundColor: special ? theme.specialKeyBackground : theme.keyBackground,
        },
      ]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text style={[styles.keyText, { color: theme.keyText }]}>{label}</Text>
    </TouchableOpacity>
  );
};

interface KeyboardLayoutProps {
  onKeyPress: (key: string) => void;
}

const KeyboardLayout: React.FC<KeyboardLayoutProps> = ({ onKeyPress }) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
    ['123', '🌐', '🎤', 'space', '🙂', '.', '↵'],
  ];

  return (
    <View style={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((key, keyIndex) => {
            let width = 1;
            let special = false;

            if (key === 'space') width = 4;
            if (['⇧', '123', '⌫', '↵'].includes(key)) special = true;

            return (
              <Key
                key={keyIndex}
                label={key}
                onPress={onKeyPress}
                width={width}
                special={special}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  key: {
    height: 45,
    margin: 3,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  keyText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default KeyboardLayout;
