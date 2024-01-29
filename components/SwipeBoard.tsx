import {Box, Text, HStack, VStack, GlobeIcon, BadgeIcon, BadgeText, Badge} from "@gluestack-ui/themed";
import {Background, BorderRadius, Margin, Padding} from "../constants";
import {StyleSheet} from "react-native";
import {useTranslation} from "react-i18next";
import {PhotoPreview} from "./PhotoPreview";

export const SwipeBoard = () => {
  const { t }  = useTranslation();
  const count: number = 25

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

          <HStack space="md">
            <PhotoPreview count={count} isEmpty={false}/>
            <PhotoPreview count={count} isEmpty={false}/>
            <PhotoPreview count={count} isEmpty/>
          </HStack>
        </VStack>
      </Box>
  )
}

export { SwipeBoard };
