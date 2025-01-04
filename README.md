# 🌟 Aura AI Keyboard - Your Chat Buddy on the Go!

Aura AI Keyboard is here to revolutionize your typing game! 🚀 This isn’t just another keyboard; it’s your personal chat assistant. Whether you're crafting formal emails, sending flirty texts, or keeping it chill with casual vibes, Aura AI Keyboard has got you covered. ✨

---

## 💡 Why Choose Aura AI Keyboard?

- **🤖 AI-Powered Magic**: Aura understands your chat and suggests replies that match the tone perfectly—formal, flirty, or casual.
- **🕒 Save Time, Impress More**: No more typing stress! Get smart, ready-to-send suggestions in seconds.
- **👆 One-Tap Wonders**: Found the perfect reply? Tap it, and voilà—it’s in your text box, ready for you to tweak and send.
- **🎨 Fully Customizable**: Aura's suggestions are editable, so you can add your personal touch. Because no one knows your vibe better than you.
- **⚡ Lightweight & Fast**: Say goodbye to laggy keyboards. Aura is optimized for seamless performance, even on low-end devices.

---

## 🚀 Tech That Powers the Magic

- **React Native**: A sleek, cross-platform app for both Android and iOS.
- **AI-Powered Brains**: Leveraging cutting-edge tools like OpenAI GPT to generate tailored suggestions.
- **Native Integration**: Seamless interaction with your device's keyboard APIs.
- **Smart Communication**: A bridge between native and React Native components for uninterrupted flow.

---

## 📥 How to Get Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/aura-ai-keyboard.git
   cd aura-ai-keyboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the App**:
   - For Android:
     ```bash
     npx react-native run-android
     ```
   - For iOS:
     ```bash
     npx react-native run-ios
     ```

4. **Enable the Keyboard**:
   - **Android**:
     - Go to `Settings > System > Languages & Input > Virtual Keyboard`.
     - Enable "Aura AI Keyboard".
   - **iOS**:
     - Go to `Settings > General > Keyboard > Keyboards > Add New Keyboard`.
     - Select "Aura AI Keyboard" and allow "Full Access".

---

## 🛠️ How It Works (The Magic Behind the Scenes)

### **1️⃣ Detect Chat Text**
- **Android**: Using the `InputConnection` API, Aura reads the current chat text:
  ```kotlin
  val inputConnection = currentInputConnection
  val chatText = inputConnection?.getExtractedText(ExtractedTextRequest(), 0)?.text
  ```
- **iOS**: Fetch the text using `UITextDocumentProxy`:
  ```swift
  if let text = textDocumentProxy.documentContextBeforeInput {
      // Use this text for tone detection
  }
  ```

### **2️⃣ Analyze the Mood**
- Aura uses an AI model to identify the conversation's tone:
  ```javascript
  async function detectTone(text) {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
              "Authorization": `Bearer YOUR_API_KEY`,
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              model: "gpt-4",
              messages: [{ role: "user", content: text }],
          }),
      });
      const data = await response.json();
      return data.choices[0].message.content;
  }
  ```

### **3️⃣ Generate Suggestions**
- Based on the tone, Aura provides tailored reply suggestions:
  ```javascript
  const generateReply = async (text, tone) => {
      const prompt = `Suggest three ${tone} replies to this: "${text}"`;
      const response = await detectTone(prompt);
      return response;
  };
  ```

### **4️⃣ Show Suggestions on the Keyboard**
- Render suggestions in a scrollable panel:
  ```javascript
  <FlatList
      horizontal
      data={suggestions}
      renderItem={({ item }) => (
          <Button title={item} onPress={() => handleSuggestionClick(item)} />
      )}
      keyExtractor={(item, index) => index.toString()}
  />
  ```

### **5️⃣ Insert Suggestion into Text Area**
- Add the selected suggestion directly into the text box:
  ```javascript
  const handleSuggestionClick = (suggestion) => {
      setText(suggestion);
  };
  ```

---

## 🤝 How You Can Contribute

We’d love your help! 🧑‍💻👩‍💻

1. **Fork the repo**.
2. **Create your feature branch**:
   ```bash
   git checkout -b feature-name
   ```
3. **Push your changes**:
   ```bash
   git push origin feature-name
   ```
4. **Open a pull request**.

---

## 📜 License

Aura AI Keyboard is licensed under the MIT License. See the `LICENSE` file for details.

---

## 🚀 Future Plans

✨ We’re just getting started! Here’s what’s next:
- 🌎 Add support for more languages.
- 🎯 Smarter tone detection with advanced AI models.
- 🎨 Fully customizable tones and styles.
- ⚡ Performance boosts for even faster suggestions.

---

## 📩 Need Help?

We’re here for you! 🫶 Reach out to us:
- **Email**: [support@auraai.com](mailto:support@auraai.com)
- **GitHub Issues**: Open a new issue and we’ll respond ASAP.

---

Thank you for choosing Aura AI Keyboard! 🥳 Make every chat unforgettable.
