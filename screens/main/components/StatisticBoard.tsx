import { Box, Text, HStack, VStack } from "@gluestack-ui/themed";
import {Background, BorderRadius} from "../../../constants";
import { StyleSheet } from "react-native";

const StatisticBoard = () => {
  return (
    <Box
      bg={"$" + Background.STATISTIC_BOARD}
      p="$5"
      m="$4"
      style={styles.statisticBoard}
    >
      <VStack space="sm">
        <Text color="$secondary800" mb="4" bold>STATS</Text>
        <HStack space="lg">
          <Text color="$secondary800">Swipes: <Text color="$red500">21</Text></Text>
          <Text color="$secondary800">Spaces freed: <Text color="$red500">23,4 GB</Text></Text>
        </HStack>
      </VStack>

    </Box>
  );
};

const styles = StyleSheet.create({
  statisticBoard: {
    width: 300,
    borderRadius: BorderRadius.BOX
  },
});

export { StatisticBoard };
