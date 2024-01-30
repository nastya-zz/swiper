import {Badge, BadgeIcon, Box, ChevronRightIcon, CircleIcon, HStack, Icon, Text, VStack} from "@gluestack-ui/themed";
import {Background, BorderRadius, Margin, Padding} from "../constants/styles";
import {useTranslation} from "react-i18next";
import {PhotoPreview} from "./PhotoPreview";
import {TFunctionReturnOptionalDetails} from "i18next";

interface IProps {
  backgroundColor: string,
  borderColor: string,
  count: number,
  sectionName: string,
  sectionDescription: string,
  icon: Icon | null
}

export const SwipeBoard = (props: IProps) => {
  const {backgroundColor, borderColor, count, sectionName, icon, sectionDescription} = props
  const { t }  = useTranslation();

  return (
      <Box
          bg={backgroundColor}
          p={Padding.BOARD}
          rounded={BorderRadius.BOARD}
          borderBottomColor={borderColor}
          borderBottomWidth="$4"
      >
        <VStack space="sm" >
          <HStack>
            <Badge size="md" variant="solid" borderRadius="$md" action="success" >
              <Text>{t(sectionName)}</Text>
              <BadgeIcon as={CircleIcon} ml="$2" />
            </Badge>
          </HStack>
          <Text>{t(sectionDescription)}</Text>

          <HStack space="md">
            <PhotoPreview count={count} isEmpty={false}/>
            <PhotoPreview count={count} isEmpty={false}/>
            <PhotoPreview count={count} isEmpty/>
            <Icon as={icon}  size="xl" alignSelf='center' color="$secondary500"/>

          </HStack>
        </VStack>
      </Box>
  )
}

export { SwipeBoard };
