import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataBookmarks = (data) => {
    return{
        type:'SET_DATA_BOOKMARKS',
        payload:data
    }
}
export const getDataBookmarks = () => async (dispatch) => {
    try {
      const jsonValue = await AsyncStorage.getItem('BOOKMARKS');
      const data = jsonValue != null ? JSON.parse(jsonValue) : [];
      dispatch(setDataBookmarks(data));
    } catch (e) {
      console.log(e);
    }
  };
export const addToBookmarks = (data) => {
    return{
        type:'ADD_TO_BOOKMARKS',
        payload:data
    }
}
export const removeBookmarks = () => {
    return{
        type:'REMOVE_BOOKMARKS',
    }
}
export const removeItemToBookmarks = (data) => {
    return{
        type:'REMOVE_ITEM_TO_BOOKMARKS',
        payload:data
    }
}
