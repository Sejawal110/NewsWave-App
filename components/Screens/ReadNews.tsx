import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, Share, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import Colors from '../Constant/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
const placeholderImage = require('../../assets/images/index.png'); 


const {width} = Dimensions.get('window');

export default function ReadNews() {
    const navigation: any = useNavigation();
   

    const news: any =  useRoute<any>().params.news;
    const hasImage = news.urlToImage && news.urlToImage !== '';

    useEffect(() => {
        console.log(news)
    },[])


    function shareYourNews () {
        Share.share({
            message: news.title+"\nRead More"+news.description
        })
    }



  return (
    <View style={{height: '100%', width: '100%', backgroundColor: Colors.white}}>
    <View style={styles.mainView}>
        <View style={styles.iconView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => shareYourNews()}>
        <Ionicons name="share-outline" size={24} color="black" />
        </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
        <Image
            source={hasImage ? { uri: news.urlToImage } : placeholderImage}
            style={styles.img}
            resizeMode="cover"
          />
      
      <Text style={styles.title} numberOfLines={4}>{news.title}</Text>
      <Text style={styles.name}>{news.source.name}</Text>
      <Text style={styles.description}>{news.description}</Text>

      <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
        <Text style={styles.btnTxt}>Read More</Text>
      </TouchableOpacity>
      </View>
      
       </View>
    </View>
  )
}

const styles = StyleSheet.create({

    mainView: {
        padding: 12,
        marginTop: 1,
        backgroundColor: Colors.white
        
    },

    img: {
        width: '100%',
        height: width * 0.7,
        borderRadius: 8
    },

    name: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold', 
        marginTop: 10
    },

    description: {
        fontSize: 19,
        marginTop: 10,
        color: Colors.secondary,
        lineHeight: 30
    },

    btnTxt: {
        marginTop: 7,
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.primary
    },

    iconView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    mainContainer: {
        backgroundColor: Colors.white
    },
})