import {GluestackUIProvider,} from "@gluestack-ui/themed";
import {StyleSheet, View} from "react-native";
import {config} from "@gluestack-ui/config";
import {Main} from "./screens/main/Main";
import "./i18n.config";
import * as MediaLibrary from 'expo-media-library';


export default function App() {
  const linkMedia = async () => {
    const {assets} = await MediaLibrary.getAssetsAsync({first: 5})
    console.log('MediaLibrary1', assets)
  }

  linkMedia()

  return (
        <GluestackUIProvider config={config}>
            <View style={styles.container}>
                <Main/>
            </View>
        </GluestackUIProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
