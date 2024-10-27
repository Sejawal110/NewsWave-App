import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Constant/Colors'
import { useNavigation } from '@react-navigation/native';

const placeholderImage = require('../../assets/images/index.png'); 

export default function HeadLineList({newsSlider}: {newsSlider: any}) {

    const navigation: any = useNavigation();

    function headlineListData ({item}: {item: any}) {
        const hasImage = item.urlToImage && item.urlToImage !== '';
        


        return (
            <View style={{marginTop: 14, backgroundColor: Colors.white}}>
                <View style={{height: 1, backgroundColor: Colors.light, marginBottom: 12  }}></View>
                <TouchableOpacity style={styles.container}
                  onPress={() => navigation.navigate('Read-News', {news: item })}
                >
                   <Image
            source={hasImage ? { uri: item.urlToImage } : placeholderImage}
            style={styles.headLineImg}
            resizeMode="cover"
          />
                    <View style={{marginRight: 130, marginLeft: 12 }}> 
                        <Text numberOfLines={4} style={styles.title}>{item.title}</Text>
                        <Text style={styles.name}>{item.source.name}</Text>
                    </View>

                </TouchableOpacity>
                
            </View>
        )
    }



  return (
    <View>
      <FlatList data={newsSlider} 
      renderItem={headlineListData}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    headLineImg: {
        height: 130,
        width: 120,
        borderRadius: 10
    },

    container: {
        marginBottom: 3,
        display: 'flex',
        flexDirection: 'row',
        
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary
    },
})