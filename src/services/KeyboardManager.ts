import * as Clipboard from 'expo-clipboard';

export class KeyboardManager {
  private text: string = '';
  private cursorPosition: number = 0;
  private shiftEnabled: boolean = false;
  private numericMode: boolean = false;

  constructor() {
    this.reset();
  }

  reset() {
    this.text = '';
    this.cursorPosition = 0;
    this.shiftEnabled = false;
    this.numericMode = false;
  }

  getCurrentText(): string {
    return this.text;
  }

  getCursorPosition(): number {
    return this.cursorPosition;
  }

  async handleKeyPress(key: string): Promise<string> {
    switch (key) {
      case '⇧':
        this.shiftEnabled = !this.shiftEnabled;
        break;
      case '⌫':
        if (this.cursorPosition > 0) {
          this.text = this.text.slice(0, this.cursorPosition - 1) + this.text.slice(this.cursorPosition);
          this.cursorPosition--;
        }
        break;
      case '↵':
        this.text = this.text.slice(0, this.cursorPosition) + '\n' + this.text.slice(this.cursorPosition);
        this.cursorPosition++;
        break;
      case 'space':
        this.text = this.text.slice(0, this.cursorPosition) + ' ' + this.text.slice(this.cursorPosition);
        this.cursorPosition++;
        break;
      case '123':
        this.numericMode = !this.numericMode;
        break;
      case '🌐':
        // Handle language switch
        break;
      case '🎤':
        // Handle voice input
        break;
      case '🙂':
        // Handle emoji picker
        break;
      default:
        let char = key;
        if (!this.numericMode) {
          char = this.shiftEnabled ? key.toUpperCase() : key.toLowerCase();
        }
        this.text = this.text.slice(0, this.cursorPosition) + char + this.text.slice(this.cursorPosition);
        this.cursorPosition++;
        if (this.shiftEnabled) {
          this.shiftEnabled = false;
        }
    }

    return this.text;
  }

  async paste(): Promise<void> {
    try {
      const text = await Clipboard.getStringAsync();
      if (text) {
        this.text = this.text.slice(0, this.cursorPosition) + text + this.text.slice(this.cursorPosition);
        this.cursorPosition += text.length;
      }
    } catch (error) {
      console.error('Failed to paste:', error);
    }
  }

  async copy(text: string): Promise<void> {
    try {
      await Clipboard.setStringAsync(text);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }

  moveCursor(position: number) {
    if (position >= 0 && position <= this.text.length) {
      this.cursorPosition = position;
    }
  }

  getWordAtCursor(): string {
    const words = this.text.slice(0, this.cursorPosition).split(/\s/);
    return words[words.length - 1] || '';
  }

  insertSuggestion(suggestion: string): void {
    const words = this.text.slice(0, this.cursorPosition).split(/\s/);
    words.pop(); // Remove the last word
    const newText = [...words, suggestion].join(' ') + ' ' + this.text.slice(this.cursorPosition);
    this.text = newText;
    this.cursorPosition = (words.join(' ') + ' ' + suggestion + ' ').length;
  }
}
