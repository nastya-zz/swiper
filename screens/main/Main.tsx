import {SafeAreaView, StyleSheet} from "react-native";
import {ChevronRightIcon, Text, useStyled, VStack} from "@gluestack-ui/themed";
import {Background, BorderColor, Typography} from "../../constants/styles";
import {StatisticBoard} from "./components/StatisticBoard";
import {useTranslation} from "react-i18next";
import {SwipeBoard} from "../../components/SwipeBoard";

const Main = () => {

  const styled = useStyled();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flex: 1,
      backgroundColor: styled.config.tokens.colors[Background.MAIN_APP],
    },
  });

  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <VStack space="md" mx="$4">
        <Text fontSize={Typography.MAIN_TITLE} pt="$4">
          {t('SwipeCollections')}
        </Text>
        <StatisticBoard />
        <SwipeBoard
          count={25}
          backgroundColor={Background.NEW_SWIPE_BOARD}
          borderColor={BorderColor.NEW_SWIPE_BOARD}
          sectionName='NewPhotos'
          sectionDescription='WeFound'
          icon={ChevronRightIcon}
          badgeVariant='success'
         />
        <SwipeBoard
          count={25}
          backgroundColor={Background.ALL_SWIPE_BOARD}
          borderColor={BorderColor.ALL_SWIPE_BOARD}
          sectionName='MostRecent'
          sectionDescription='MostRecentPhoto'
          icon={ChevronRightIcon}
          badgeVariant='muted'
         />
      </VStack>
    </SafeAreaView>
  );
};

export { Main };
