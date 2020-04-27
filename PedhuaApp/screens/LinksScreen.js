import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, Image } from "react-native";

const supportedURL = "https://google.com";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const LinksScreen = () => {
  return (
    <View>
      <View style={styles.welcomeContainer}>
        <Image
          source={require("../assets/images/chatbot.png")}
          style={styles.welcomeImage}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Talk to me!"
          color="white"
          onPress={() => {
            Linking.openURL("https://integrations.eu-gb.assistant.watson.cloud.ibm.com/web/public/77674303-5af5-4bb4-aafb-ac43cffe03fb");
          }}
        />
      </View>
    </View>
  );
};

export default LinksScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttons: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "rgb(203, 11, 101)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 450,
    height: 350,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
});
