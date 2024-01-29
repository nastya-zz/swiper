import { Box, Text, HStack, VStack } from "@gluestack-ui/themed";
import {Background, BorderRadius} from "../../../constants";
import { StyleSheet } from "react-native";
import {useTranslation} from "react-i18next";

const StatisticBoard = () => {
    const { t }  = useTranslation();

    return (
    <Box
      bg={"$" + Background.STATISTIC_BOARD}
      p="$5"
      m="$4"
      rounded={'$'+BorderRadius.BOX}
      style={styles.statisticBoard}
    >
      <VStack space="sm">
        <Text color="$secondary800" mb="4" bold>{t('STATS')}</Text>
        <HStack space="lg">
          <Text color="$secondary800">{t('Swipes')}: <Text color="$red500">21</Text></Text>
          <Text color="$secondary800">{t('SpacesFreed')}: <Text color="$red500">23,4 GB</Text></Text>
        </HStack>
      </VStack>

    </Box>
  );
};

const styles = StyleSheet.create({
  statisticBoard: {
    width: 300,
  },
});

export { StatisticBoard };
