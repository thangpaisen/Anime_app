import React,{useContext,useState,useEffect} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,FlatList} from 'react-native';
import {Avatar, Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
// import { useNavigation } from '@react-navigation/native';
// import {AuthContext} from '../navigation/AuthProvider';
// import {logout} from '../redux/actions/user'
// import {useDispatch,useSelector} from 'react-redux'

export default function Settings() {
  const ItemSettings = ({item})=>(
    <View style={styles.settingItem}>
      <Icon style={styles.iconSetting} name={item.icon} size={20} color='#fff'/>
      <Text style={styles.titleItemSetting} >{item.title}</Text>
    </View>
  )
  const LisData=[
    {icon:'paw-outline',title:'Privacy Policy'},
    {icon:'share-social-outline',title:'Share'},
    {icon:'mail-outline',title:'Support'},
    {icon:'barbell-outline' ,title:'Version'},
    {icon:'trash-outline',title:'Clean cache'},
  ]
//   const dispatch = useDispatch()
//   const user = useSelector(state => state.user)
//   console.log('user',user)
const [user, setUser] = useState({})
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Avatar
          size={65}
          rounded
          source={{
            uri: 'https://images6.alphacoders.com/102/1029037.jpg',
          }}
          containerStyle={styles.imageAvatar}
        />
        <View style={styles.profileTitle}>
          {/* <Text style={styles.fullName}>❤ {user.email}</Text> */}
          <Text style={styles.fullName} numberOfLines={1} ellipsizeMode="tail">❤ {user?.displayName || 'Không tên'}</Text>
          <Text style={styles.email}> Email: {user?.email}</Text>
        </View>
      </View>
      <View style={styles.optionSettings}>
        <FlatList
          data={LisData}
          renderItem={({item})=><ItemSettings item={item}/>}
          keyExtractor={(item,index)=>index}
        />
      </View>
      <Button 
      containerStyle={styles.buttonLogout}
        buttonStyle={{ backgroundColor: '#09bff2'}}
        titleStyle={styles.buttonLogoutTitle}
        // onPress={()=>dispatch(logout())}
        title={'Đăng Xuất'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#171821'
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#333',
  },
  imageAvatar: {
    marginLeft: 20,
    elevation: 5,
  },
  profileTitle: {
    padding: 10,
    // backgroundColor: 'red'
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    marginTop:4,
    color: 'white',
    
  },
  optionSettings: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#333',
  },

  settingItem:{
    flexDirection: 'row',
    paddingVertical:16,
    borderBottomWidth:0.4,
    borderBottomColor:'#d1e6e2'
  },
  iconSetting:{
    
  },
  titleItemSetting:{
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'white',
  },
  buttonLogout:{
    marginHorizontal:10,
    marginVertical:20,
    borderRadius:10,
   
  },
  buttonLogoutTitle:{
    fontSize: 16,
  }
});