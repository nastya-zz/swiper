import {Box, Center, ChevronRightIcon, Icon, Image, Text} from "@gluestack-ui/themed";
import {Background, BorderRadius} from "../constants/styles";

interface IProps {
  count: number
  isEmpty: boolean
}
const PhotoPreview = ({count, isEmpty}: IProps) => {

  const image =  count > 2 && !isEmpty?
      (<Image
          size="lg"
          alt="Image from gallery"
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
      />) :
      (
          <Center width={90} flex>
            <Text size="xl" alignSelf='center' color="white">+{count - 2}</Text>
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