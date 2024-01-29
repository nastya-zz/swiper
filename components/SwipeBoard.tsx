import {Box, Text, HStack, VStack, GlobeIcon, BadgeIcon, BadgeText, Badge} from "@gluestack-ui/themed";
import {Background, BorderRadius, Margin, Padding} from "../constants";
import {StyleSheet} from "react-native";
import {useTranslation} from "react-i18next";

export const SwipeBoard = () => {
  const { t }  = useTranslation();

  return (
      <Box
          bg={"$" + Background.SWIPE_BOARD}
          p={Padding.BOARD}
          m={Margin.BOARD}
          rounded={'$' + BorderRadius.BOARD}
      >
        <VStack space="sm" >
          <Badge size="md" variant="solid" borderRadius="$md" action="muted">
            <Text>{t('NewPhotos')}</Text>
            {/*<BadgeIcon as={} ml="$2" />*/}
          </Badge>
          <Text>{t('WeFound')}</Text>

          <Box>

          </Box>
        </VStack>
      </Box>
  )
}

export { SwipeBoard };
