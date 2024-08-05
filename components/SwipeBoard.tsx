import {Badge, BadgeIcon, Box, Icon, CircleIcon, HStack, Button, Text, VStack} from "@gluestack-ui/themed";
import {BorderRadius, Padding} from "../constants/styles";
import {useTranslation} from "react-i18next";
import {PhotoPreview} from "./PhotoPreview";
import {IBoardProps} from "../screens/main/utils/get-board";
import {TouchableHighlight} from "react-native";


export const SwipeBoard = (props: IBoardProps ) => {
  const {backgroundColor, borderColor, count, sectionName, icon, sectionDescription, badgeVariant, prevUrls} = props
  const { t }  = useTranslation();

  return (
      <TouchableHighlight underlayColor="red">

      <Box
          bg={backgroundColor}
          p={Padding.BOARD}
          rounded={BorderRadius.BOARD}
          borderBottomColor={borderColor}
          borderBottomWidth="$4"
      >
        <VStack space="sm" >
          <HStack>
            <Badge size="md" variant="solid" borderRadius="$md" action={badgeVariant} >
              <Text>{t(sectionName)}</Text>
              <BadgeIcon as={CircleIcon} ml="$2" />
            </Badge>
          </HStack>
          <Text>{t(sectionDescription)}</Text>

          <HStack space="md" >
            {prevUrls.slice(0, 3).map((uri, i) => (<PhotoPreview key={i + uri} count={count - 2} isEmpty={i >= 2} url={uri} />))}

            <Icon as={icon}  size="xl" alignSelf='center' color="$secondary500"/>
          </HStack>
        </VStack>
      </Box>
      </TouchableHighlight>
  )
}

export { SwipeBoard };
