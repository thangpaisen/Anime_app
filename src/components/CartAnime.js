import React from 'react'
import { StyleSheet, Text, View,Pressable,Image,Dimensions } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const CartAnime = ({data}) => {
    const navigation = useNavigation();
    return(
<Pressable style={styles.content}
    onPress={() => navigation.navigate('Details', {data: data || ''})}
>
                        <Image style={styles.image} 
                            source={
                                {uri: data?.thumbnail}||
                                imageImp
                                } />
                        <View
                            style={{
                            position: 'absolute',
                            backgroundColor: '#333',
                            top: 4,
                            left: 0,
                            marginRight: 30,
                            padding: 2,
                            paddingRight:6,
                            borderTopRightRadius: 6,
                            borderBottomRightRadius: 6,
                            }}>
                            <Text
                            style={styles.latestEpisode}
                            numberOfLines={1}
                            ellipsizeMode="tail">
                            {data?.lastWatched?.full_name||data?.latestEpisode?.name ||data?.time } 
                            </Text>
                        </View>
                        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                            {data?.name} 
                        </Text>
                        </Pressable>
    )
}

export default CartAnime
const {width, height} =Dimensions.get('window');
const styles = StyleSheet.create({
    content: {
    marginLeft: 10,
    marginVertical: 10,
    width:(width-30)/2,
  },
  image: {
    width:(width-30)/2,
    height: 100,
    borderRadius: 4,
  },
  name: {
    fontSize: 14,
    marginTop: 4,
    color: 'white',
    marginRight: 10,
  },
   latestEpisode: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 14,
  },
})
