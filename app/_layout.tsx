import {Slot} from 'expo-router';
import {config} from "@gluestack-ui/config";
import {GluestackUIProvider} from "@gluestack-ui/themed";
import {StyleSheet, View} from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default function RootLayout() {
  return (
      <GluestackUIProvider config={config}>
        <View style={styles.container}>
          <Slot />
        </View>
      </GluestackUIProvider>

  );
}