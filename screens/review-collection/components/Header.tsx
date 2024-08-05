import {
  Box,
  HStack,
  useStyled,
  VStack,
  Text,
  Center,
  MenuIcon,
  Icon,
  SettingsIcon,
  ChevronRightIcon
} from "@gluestack-ui/themed";
import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import {Background} from "../../../constants/styles";
import {Asset} from "expo-media-library";
import {router} from "expo-router";


interface IHeaderProp {
  asset: Asset,
  collectionName: string,
  isFavorite: boolean
}

const  Header = (props: IHeaderProp) => {
  const styled = useStyled();
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flex: 1,
      backgroundColor: styled.config.tokens.colors[Background.MAIN_APP],
    },
  });
  const date = new Date(props.asset.creationTime).toLocaleDateString()

  return (
      <SafeAreaView style={styles.container} >
        <ScrollView>
          <Box mx="$2">
            <HStack space="sm" reversed={false}>
              <TouchableOpacity  onPress={() => router.replace('/')}>
                <Center w="$10" h="$15">
                  <Icon as={MenuIcon}  w="$8" h="$8" color={Background.ICONS_REVIEW}/>
                </Center>
              </TouchableOpacity>

              <Center w="$80" h="$15">
                <VStack space="xs">
                  <Center>
                    <Text bold color={Background.ICONS_REVIEW}>
                      {props.collectionName}
                      <Center>
                        <Icon as={ChevronRightIcon} ml="$2" w="$4" h="$4" color={Background.ICONS_REVIEW}/>
                      </Center>
                    </Text>
                  </Center>
                  <Center><Text color={Background.ICONS_REVIEW}>{date}</Text></Center>
                </VStack>
              </Center>
              <Center w="$10" h="$15" >
                <Icon as={SettingsIcon} m="$2" w="$8" h="$8" color={Background.ICONS_REVIEW}/>
              </Center>
            </HStack>
          </Box>

        </ScrollView>
      </SafeAreaView>

  )
}
export {Header, IHeaderProp}