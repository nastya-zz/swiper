import {Badge, Box, ChevronRightIcon, HStack, Icon, Text, VStack} from "@gluestack-ui/themed";
import {Background, BorderRadius, Margin, Padding} from "../constants";
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
          <Badge size="md" variant="solid" borderRadius="$md" action="muted" >
            <Text>{t('NewPhotos')}</Text>
            {/*<BadgeIcon as={} ml="$2" />*/}
          </Badge>
          <Text>{t('WeFound')}</Text>

          <HStack space="md">
            <PhotoPreview count={count} isEmpty={false}/>
            <PhotoPreview count={count} isEmpty={false}/>
            <PhotoPreview count={count} isEmpty/>
            <Icon as={ChevronRightIcon}  size="xl" alignSelf='center' color="$secondary300"/>

          </HStack>
        </VStack>
      </Box>
  )
}

export { SwipeBoard };
