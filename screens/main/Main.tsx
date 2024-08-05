import {SafeAreaView, ScrollView, StyleSheet, TouchableOpacity} from "react-native";
import {Spinner, Text, useStyled, VStack} from "@gluestack-ui/themed";
import {Background, Typography} from "../../constants/styles";
import {StatisticBoard} from "./components/StatisticBoard";
import {useTranslation} from "react-i18next";
import {SwipeBoard} from "../../components/SwipeBoard";
import {useMediaStore} from "../../store";
import {useEffect, useState} from "react";
import {getBoard} from "./utils";
import {IBoardProps} from "./utils/get-board";
import {router} from 'expo-router';


const Main = () => {
  const {commonCollection, isMediaLoaded, setSelectedCollection} = useMediaStore((state) => ({
    commonCollection: state.commonCollection,
    setCommonCollection: state.setCommonCollection,
    isMediaLoaded: state.isMediaLoaded,
    setSelectedCollection: state.setSelectedCollection
  }))

  const [boards, setBoards] = useState([])

  useEffect(() => {
    const commonCollectionKeys = Object.keys(commonCollection)
    const boardArray = commonCollectionKeys.map(key => getBoard(key, commonCollection[key]))
    setBoards(boardArray)
  }, [commonCollection])

  const styled = useStyled();
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flex: 1,
      backgroundColor: styled.config.tokens.colors[Background.MAIN_APP],
    },
  });

  const {t} = useTranslation();
  if (!isMediaLoaded) {
    return (<SafeAreaView style={styles.container} alignItems="center" justifyContent="center">
      <Spinner size="large"/>
    </SafeAreaView>)
  }

  const handleTouchBoard = (board: IBoardProps) => {
    console.log(board.collectionName)
    setSelectedCollection(board.collectionName, board.collection)
    router.replace('/review-collection')
  }


  const boardList = boards
      .filter(board => board.count)
      .map((board, i) => {
        return (
            <TouchableOpacity key={'board-' + i} onPress={() => handleTouchBoard(board)}>
              <SwipeBoard
                  count={board.count}
                  backgroundColor={board.backgroundColor}
                  borderColor={board.borderColor}
                  sectionName={board.sectionName}
                  sectionDescription={board.sectionDescription}
                  icon={board.icon}
                  badgeVariant={board.badgeVariant}
                  prevUrls={board.prevUrls}
                  collection={board.collection}
                  collectionName={board.collectionName}
              />
            </TouchableOpacity>
        )
      })

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <VStack space="md" mx="$4">
            <Text fontSize={Typography.MAIN_TITLE} pt="$4">
              {t('SwipeCollections')}
            </Text>
            <StatisticBoard/>
            {
              boardList
            }
          </VStack>
        </ScrollView>

      </SafeAreaView>
  );
};

export {Main};
