import {Box} from "@gluestack-ui/themed";
import {Background, BorderRadius, Margin, Padding} from "../constants";

const PhotoPreview = () => {
  return (
      <Box
          bg={"$" + Background.PHOTO_PREVIEW}
          rounded={'$' + BorderRadius.PHOTO_PREVIEW}
      >

      </Box>
  )
}