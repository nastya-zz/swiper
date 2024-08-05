import {Header} from "./components/Header";
import {useMediaStore} from "../../store";
import {Asset} from "expo-media-library";
import {useState} from "react";

const ReviewCollection = () => {
  const { selectedCollection } = useMediaStore((state) => ({
    selectedCollection: state.selectedCollection
  }))

  const collectionName = Object.keys(selectedCollection)[0]
  console.log(selectedCollection)
  const assets = Object.values(selectedCollection)[0]
  const [asset, setAsset] = useState<Asset>(assets[0])
  return (
      <Header
          asset={asset}
          collectionName={collectionName}
          isFavorite={false}
      />
  )
}

export {ReviewCollection}