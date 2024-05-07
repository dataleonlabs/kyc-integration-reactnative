import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import React, { useRef } from 'react';


export default function App() {
  const [webViewVisible, setWebViewVisible] = React.useState(false);
  const webViewRef = useRef(null);

  const handleMessage = (message = null) => {
    const receivedMessage = message?.nativeEvent?.data;
    if (receivedMessage) {
      console.info(receivedMessage)
      switch (receivedMessage) {
        case 'ABORTED':
          // Handle ABORTED status
          // For example: console.log('ABORTED status received');
          break;
          case 'STARTED':
          // Handle STARTED status
          // For example: console.log('STARTED status received');
          break;
        case 'FINISHED':
          // Handle FINISHED status
          // For example: console.log('FINISHED status received');
          break;
        default:
          // Handle other cases or unrecognized statuses
          break;
      }
    }
  };

  const openWebView = () => {
    setWebViewVisible(true);
  };

  const closeWebView = () => {
    setWebViewVisible(false);
  };

  return (
    <>
    {!webViewVisible && (
        <SafeAreaView style={styles.container}>
          <Text style={styles.paragraph}>Dataleon React Native Integration</Text>
          <TouchableOpacity onPress={openWebView} style={styles.button}>
            <Text style={styles.buttonText}>Ouvrir WebView</Text>
          </TouchableOpacity>
          </SafeAreaView>
        )}
      {webViewVisible && (
        <WebView
        ref={webViewRef}
        source={{ uri: 'https://id.dataleon.ai/w/022230c6-30e8-43a4-9f67-xxx' }} // Remplacez 'https://example.com' par l'URL de votre choix
        style={styles.webview}
        mediaCapturePermissionGrantType="grant"
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
        startInLoadingState
        javaScriptEnabled
        domStorageEnabled
        cacheEnabled
        thirdPartyCookiesEnabled
        allowsProtectedMedia
        allowUniversalAccessFromFileURLs
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        onLoad={() => console.log('WebView chargée')}
        onError={() => console.log('Erreur lors du chargement de la WebView')}
        onMessage={handleMessage}
        />
      )}
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
