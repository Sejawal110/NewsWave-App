import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Constant/Colors';



export default function HomeSlider({selectCategory}: {selectCategory: any}) {

    const [active, setActive] = useState(1);


     const CategoryList = [

        

        {
            id: '1',
            name: 'Fashion'
        },

       
    
        {
            id: '2',
            name: 'Technology'
        },
    
        {
            id: '3',
            name: 'Weather'
        },
    
        {
            id: '4',
            name: 'Food'
        },
    
        {
            id: '5',
            name: 'Sports'
        },
    
        {
            id: '6',
            name: 'Education'
        },

        {
            id: '7',
            name: 'Music'
        },


        {
            id: '9',
            name: 'Economy'
        },

        {
            id: '8',
            name: 'Finance'
        },
    ]
    
    


    function onListClcik (id: any) {
        setActive(id);
    }


    function sliderList ({item}: {item: any}) {
        return (
            <View  style={styles.mainContainer}>
                <TouchableOpacity onPress={() => {onListClcik(item.id);
                selectCategory(item.name);
               
                }}>

             <Text  style={ item.id === active ? styles.sliderBar2 : styles.sliderBar}>{item.name}</Text>
            </TouchableOpacity>
        </View>
        )
    }


  return (
    <View>
      <FlatList data={CategoryList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id }
      renderItem={sliderList}
      />
    </View>
  )
}

const styles = StyleSheet.create({

    mainContainer: {
        marginTop: 8,
        backgroundColor: Colors.white
    },


    sliderBar: {
        marginRight: 20,
        fontSize: 23,
        fontWeight: '600',
        color: Colors.secondary
    },

    sliderBar2: {
        marginRight: 20,
        fontSize: 23,
        fontWeight: 'bold',
        color: Colors.primary
    },



    
})