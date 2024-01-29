import {Box, Text, HStack, VStack} from "@gluestack-ui/themed";
import {Background, BorderRadius} from "../constants";
import {StyleSheet} from "react-native";
import {useTranslation} from "react-i18next";

export const SwipeBoard = () => {
  return (
      <Box
          bg={"$" + Background.SWIPE_BOARD}
          p="$5"
          m="$4"
          rounded={'$' + BorderRadius.BOX}
      >

      </Box>
  )
}

export { SwipeBoard };
