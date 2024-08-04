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
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";
import {Background} from "../../../constants/styles";
import {Asset} from "expo-media-library";


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


  return (
      <SafeAreaView style={styles.container} >
        <ScrollView>
          <Box mx="$2">
            <HStack space="sm" reversed={false}>
              <Center w="$10" h="$15">
                <Icon as={MenuIcon}  w="$8" h="$8" color={Background.ICONS_REVIEW}/>
              </Center>
              <Center w="$80" h="$15">
                <VStack space="xs">
                  <Center>
                    <Text bold color={Background.ICONS_REVIEW}>
                      Current Collection Name
                      <Center>
                        <Icon as={ChevronRightIcon} ml="$2" w="$4" h="$4" color={Background.ICONS_REVIEW}/>
                      </Center>
                    </Text>
                  </Center>
                  <Center><Text color={Background.ICONS_REVIEW}>Current Photo Date Info</Text></Center>
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