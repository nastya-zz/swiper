import {CommonAlbumCollection} from "../../../types";
import {Background, BorderColor} from "../../../constants/styles";
import {ChevronRightIcon, Icon} from "@gluestack-ui/themed";
import {Asset} from "expo-media-library";

interface IBoard {
  backgroundColor: string,
  borderColor: string,
  badgeVariant: string,
  count: number,
  sectionName: keyof ICommonCollections,
  sectionDescription: string,
  icon: Icon | null,
  prevUrls: string[] | [],
  collection: Asset[] | []
}

interface IBoardProps extends IBoard {}

const BoardProperty :Record<CommonAlbumCollection, IBoard> = {
  [CommonAlbumCollection.NEW_PHOTOS]:  {
    count: 0,
    backgroundColor: Background.NEW_SWIPE_BOARD,
    borderColor: BorderColor.NEW_SWIPE_BOARD,
    sectionName: 'NewPhotos',
    sectionDescription: 'WeFound',
    icon: ChevronRightIcon,
    badgeVariant: 'success',
    prevUrls: [],
    collection: []
  },
  [CommonAlbumCollection.RECENTLY]: {
    count: 0,
    backgroundColor: Background.ALL_SWIPE_BOARD,
    borderColor: BorderColor.ALL_SWIPE_BOARD,
    sectionName: 'MostRecent',
    sectionDescription: 'MostRecentPhoto',
    icon: ChevronRightIcon,
    badgeVariant: 'muted',
    prevUrls: [],
    collection: []
  },
  [CommonAlbumCollection.CAMERA_ROLL]: {
    count: 0,
    backgroundColor: Background.ALL_SWIPE_BOARD,
    borderColor: BorderColor.ALL_SWIPE_BOARD,
    sectionName: 'CameraRoll',
    sectionDescription: 'CameraRollPhoto',
    icon: ChevronRightIcon,
    badgeVariant: 'muted',
    prevUrls: [],
    collection: []
  },
  [CommonAlbumCollection.FAVORITES]: {
    count: 0,
    backgroundColor: Background.FAVORITE_BOARD,
    borderColor: BorderColor.FAVORITE_BOARD,
    sectionName: 'Favorite',
    sectionDescription: 'FavoritePhoto',
    icon: ChevronRightIcon,
    badgeVariant: 'muted',
    prevUrls: [],
    collection: []
  },
}

const getBoard = (title, collection) :IBoardProps => {
  return {
    ...BoardProperty[title],
    count: collection.length,
    prevUrls: collection.length ? collection.map(c => c.uri) : [],
    collection
  }
}

export {getBoard, IBoardProps}