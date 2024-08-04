import {GluestackUIProvider,} from "@gluestack-ui/themed";
import {StyleSheet, View} from "react-native";
import {config} from "@gluestack-ui/config";
import {Main} from "./screens/main/Main";
import "./i18n.config";
import {useMediaStore} from "./store/media";
import {ReviewCollection} from "./screens/review-collection/ReviewCollection";


export default function App() {
  useMediaStore.getState().initMedia()

  return (
        <GluestackUIProvider config={config}>
            <View style={styles.container}>
                <Main/>
              {/*{<ReviewCollection/>}*/}
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
