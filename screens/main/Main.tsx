import {SafeAreaView, StyleSheet} from "react-native";
import {Heading, useStyled} from "@gluestack-ui/themed";
import {Background, Typography} from "../../constants";
import {StatisticBoard} from "./components/StatisticBoard";
import {useTranslation} from "react-i18next";

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

  const { t }  = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Heading size={Typography.MAIN_TITLE} m="$4">
        {t('SwipeCollections')}
      </Heading>

      <StatisticBoard />
    </SafeAreaView>
  );
};

export { Main };
