import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {FilterBar} from '../components/index'
import CardData from '../hooks/CardData'
import Card from '../components/Card'

const Home = () => {
  const [cardData, setCardData] = useState<{count: number}>()


  const fetchData = async () => {
    const data = await CardData();
    setCardData(data);
  };

  const temp = useSelector((state: any) => {
    return state.wishlist
  })
  const dispatch = useDispatch()
  useEffect(() => {
    fetchData();
    // dispatch(changeTemp("changeTemp"))
    // console.log(temp);
  },[])
  
  
  return (
    <View style = {styles.homePage}>
      <FilterBar />
      <Text style = {styles.resultsHeading}><Text style = {styles.resultsHeadingSpan}>{(cardData) ? cardData.count : 0} Results </Text>found for <Text style = {styles.resultsHeadingSpan}>Buy</Text> in <Text style = {styles.resultsHeadingSpan}>Gandhinagar</Text></Text>
      <Card />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  homePage: {
    padding: 9,
    height: "100%"
  },
  resultsHeading: {
    fontSize: 16,
    marginVertical: 10,
    marginLeft: 4
  },
  resultsHeadingSpan: {
    color: "#fe6636"
  }
})