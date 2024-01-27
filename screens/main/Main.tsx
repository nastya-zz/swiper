import { SafeAreaView, StyleSheet } from "react-native";
import { useStyled, Heading } from "@gluestack-ui/themed";
import { Background, Typography } from "../../constants";
import { StatisticBoard } from "./components/StatisticBoard";

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

  return (
    <SafeAreaView style={styles.container}>
      <Heading size={Typography.MAIN_TITLE} m="$4">
        Swipe Collections
      </Heading>

      <StatisticBoard />
    </SafeAreaView>
  );
};

export { Main };
