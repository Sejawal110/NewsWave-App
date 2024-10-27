import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import HomeSlider from '../Home/HomeSlider'
import Colors from '../Constant/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import TopHeadlineSlider from '../Home/TopHeadlineSlider';
import HeadLineList from '../Home/HeadLineList';
import ApiCall from '../API/ApiCall'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {

  const [newsSlider, setNewsSlider] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
  getNewsByCategory('latest');

  },[])

  const getNewsByCategory = async (category: string) => {
    setLoading(true);
    try{
      const response: any = await ApiCall.getCategory(category);
      if (response.ok) {
        setNewsSlider(response.data.articles);
      }  else {
        console.error('Error fetching news:', response.problem);
      }
    } catch (error) {
      console.log('Error:', error)
    } finally {
      setLoading(false);
    }
  };


  return (
    <ScrollView style={{padding: 10, backgroundColor: Colors.white}} >
    
    
        <View style={styles.headerContainer}>
      <Text style={styles.header}>News<Text style={styles.header2}>Wave</Text></Text> 
      <View style={styles.iconContainer}>
      <Ionicons  name="notifications" size={28} color="black" />
      </View>
      </View>

      <HomeSlider selectCategory={(category: string) => getNewsByCategory(category)}  />



      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} style={styles.loader} />
      )  :   (
        <>
        <TopHeadlineSlider newsSlider={newsSlider} />
        <HeadLineList newsSlider={newsSlider} />
        </>
    )}




    
    
    </ScrollView>
   )
    
}

const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },

    header: {
        fontSize: 26,
        fontWeight: 'bold',
        
    },

    header2: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.primary
    },

    iconContainer: {
        marginTop: 10,
        
    },

    loader: {
      marginTop: '60%'
    },


})