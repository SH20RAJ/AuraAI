export interface Theme {
  primary: string;
  background: string;
  text: string;
  keyBackground: string;
  keyText: string;
  specialKeyBackground: string;
  specialKeyText: string;
  suggestionBackground: string;
  suggestionText: string;
  toggleTheme?: () => void;
}

export const themes: { [key: string]: Theme } = {
  light: {
    primary: '#007AFF',
    background: '#F0F0F3',
    text: '#000000',
    keyBackground: '#FFFFFF',
    keyText: '#000000',
    specialKeyBackground: '#E5E5E5',
    specialKeyText: '#007AFF',
    suggestionBackground: '#FFFFFF',
    suggestionText: '#000000',
  },
  dark: {
    primary: '#0A84FF',
    background: '#1C1C1E',
    text: '#FFFFFF',
    keyBackground: '#2C2C2E',
    keyText: '#FFFFFF',
    specialKeyBackground: '#3A3A3C',
    specialKeyText: '#0A84FF',
    suggestionBackground: '#2C2C2E',
    suggestionText: '#FFFFFF',
  },
  nature: {
    primary: '#4CAF50',
    background: '#E8F5E9',
    text: '#1B5E20',
    keyBackground: '#FFFFFF',
    keyText: '#2E7D32',
    specialKeyBackground: '#A5D6A7',
    specialKeyText: '#1B5E20',
    suggestionBackground: '#FFFFFF',
    suggestionText: '#2E7D32',
  },
  ocean: {
    primary: '#0288D1',
    background: '#E1F5FE',
    text: '#01579B',
    keyBackground: '#FFFFFF',
    keyText: '#0277BD',
    specialKeyBackground: '#81D4FA',
    specialKeyText: '#01579B',
    suggestionBackground: '#FFFFFF',
    suggestionText: '#0277BD',
  },
  sunset: {
    primary: '#FF5722',
    background: '#FBE9E7',
    text: '#BF360C',
    keyBackground: '#FFFFFF',
    keyText: '#D84315',
    specialKeyBackground: '#FFAB91',
    specialKeyText: '#BF360C',
    suggestionBackground: '#FFFFFF',
    suggestionText: '#D84315',
  },
};
