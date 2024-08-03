import {Box, Center, ChevronRightIcon, Icon, Image, Text} from "@gluestack-ui/themed";
import {Background, BorderRadius} from "../constants/styles";

interface IProps {
  count: number
  isEmpty: boolean
  url?: string
}
const PhotoPreview = ({count, isEmpty, url}: IProps) => {

  const image =  !isEmpty && url ?
      (<Image
          size="lg"
          alt="Image from gallery"
          source={{
            uri: url,
          }}
      />) :
      (
          <Center width={90} flex>
            <Text size="xl" alignSelf='center' color="white">+{count}</Text>
          </Center>
      )

  return (
      <Box
          bg={"$" + Background.PHOTO_PREVIEW}
          rounded={BorderRadius.PHOTO_PREVIEW}
          borderColor="$borderLight200"
          borderWidth="$4"
      >

        {image}
      </Box>
  )
}


export {PhotoPreview}