import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../Constant/Colors';
import { useNavigation } from '@react-navigation/native';

const placeholderImage = require('../../assets/images/index.png'); 

const { width } = Dimensions.get('window');

export default function TopHeadlineSlider({ newsSlider }: { newsSlider: any }) {
  const navigation: any = useNavigation();

  function headlinesData({ item }: { item: any }) {
    const hasImage = item.urlToImage && item.urlToImage !== '';
    const title = item.title || 'No title available'; 
    const sourceName = item.source.name || 'Unknown Source'; 

    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={[styles.item, { width: width * 0.8 }]}
          onPress={() => navigation.navigate('Read-News', { news: item })}
        >
          <Image
            source={hasImage ? { uri: item.urlToImage } : placeholderImage}
            style={styles.img}
            resizeMode="cover"
          />
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.name}>
            {sourceName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={newsSlider}
        renderItem={headlinesData}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 13,
  },
  container: {
    paddingHorizontal: 1,
  },
  item: {
    marginRight: 20,
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  img: {
    width: '100%',
    height: width * 0.7,
    borderRadius: 12,
  },
  title: {
    marginTop: 9,
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    marginTop: 7,
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600', // Change weight for differentiation
  },
});