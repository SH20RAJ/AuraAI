export default {
  name: 'AuraAI Keyboard',
  slug: 'auraai',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.auraai.keyboard'
  },
  android: {
    package: 'com.auraai.keyboard',
    versionCode: 1,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    permissions: ['VIBRATE']
  },
  extra: {
    eas: {
      projectId: 'auraai-keyboard'
    }
  }
};
