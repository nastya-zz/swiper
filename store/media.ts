import { create } from 'zustand'
import {Asset, PagedInfo, PermissionStatus} from "expo-media-library";
import * as MediaLibrary from "expo-media-library";
import { produce } from 'immer'
import {CommonAlbumCollection} from "../types";



interface ICommonCollections {
  [CommonAlbumCollection.NEW_PHOTOS]:  Asset[] | []
  [CommonAlbumCollection.RECENTLY]: Asset[] | []
  [CommonAlbumCollection.CAMERA_ROLL]: Asset[] | []
  [CommonAlbumCollection.FAVORITES]: Asset[] | []
}

type TCommonCollection = keyof ICommonCollections;


interface IMedia {
  isMediaLoaded: boolean
  commonCollection: ICommonCollections;
  deleteSelected: [];
  saveSelected: [];
  selectedCollection: null |  Record<keyof ICommonCollections, ICommonCollections[keyof ICommonCollections]>,
  setCommonCollection: (keys :TCommonCollection[]) => void;
  setSelectedCollection: (name: keyof ICommonCollections, collection: Asset[]) => void;
  initMedia: () => void;
}

async function  checkPermissions() {
  const {status} = await MediaLibrary.getPermissionsAsync()
  console.log('permissionResponse', status)
  return status === PermissionStatus.GRANTED;
}

async function  getCommonCollection(key: TCommonCollection): Promise<Asset[]| []> {
  console.log('getCommonCollection', key)
  let assets = {assets: []}

  switch (key) {
  case CommonAlbumCollection.RECENTLY:
  case CommonAlbumCollection.FAVORITES:
    const albums = await MediaLibrary.getAlbumsAsync({includeSmartAlbums: true})
    const album = albums.find(item => item.title === key)

    if (album && album.id) {
      assets = await MediaLibrary.getAssetsAsync({album: album.id})
      console.log('fav assets', assets.assets.length)
    } else {
      return []
    }
    break
  case CommonAlbumCollection.CAMERA_ROLL:
    assets = await MediaLibrary.getAssetsAsync({createdBefore: Date.now()})
    console.log('[CommonAlbumCollection.CAMERA_ROLL]', assets.assets.length)

    break
  case CommonAlbumCollection.NEW_PHOTOS:
    const lastThreeDays = Date.now() - 259200000 // three days
    assets = await MediaLibrary.getAssetsAsync({createdAfter: lastThreeDays})
    console.log('[CommonAlbumCollection.NEW_PHOTOS]', assets.assets.length)
    break

  default:
    assets = await MediaLibrary.getAssetsAsync({createdBefore: Date.now()})
  }

  return assets.assets ?? []
}

const DEFAULT_PARAMS: TCommonCollection[] = [
  CommonAlbumCollection.RECENTLY,
  CommonAlbumCollection.FAVORITES,
  CommonAlbumCollection.CAMERA_ROLL,
  CommonAlbumCollection.NEW_PHOTOS
]

const useMediaStore = create<IMedia>()((set, get) => ({
  isMediaLoaded: false,
  commonCollection:  {
    [CommonAlbumCollection.NEW_PHOTOS]: [],
    [CommonAlbumCollection.RECENTLY]: [],
    [CommonAlbumCollection.CAMERA_ROLL]: [],
    [CommonAlbumCollection.FAVORITES]: []
  },
  deleteSelected: [],
  saveSelected: [],
  selectedCollection: null,

  setCommonCollection: async (param: TCommonCollection[] = DEFAULT_PARAMS) => {
    set( {isMediaLoaded: false})
    const promise = new Promise(resolve => {
      const promises = param.map(collection => {
        return getCommonCollection(collection).then(result => {
          console.log('collection', collection, result?.length)

          set(produce(state => {state.commonCollection[collection] = result}))
          return Promise.resolve()
        })
      })
      Promise.all(promises).then(() => {
        resolve(true)
      })
    })

    await promise
    set( {isMediaLoaded: true})
  },
  initMedia: async() => {
    try {
      const permissionResult = await checkPermissions()
      if (!permissionResult) {
        throw new Error('No access!!!')
      }

     get().setCommonCollection(DEFAULT_PARAMS)
    } catch(e) {
      console.error(e)
    }
  },

  setSelectedCollection(nameCollection, collection) {
    set( {selectedCollection: {
        [nameCollection]: collection
      }})
  }
}))

export {useMediaStore, DEFAULT_PARAMS, ICommonCollections}