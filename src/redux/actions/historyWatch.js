import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataHistoryWatch = (data) => {
    return{
        type:'SET_DATA_HISTORY_WATCH',
        payload:data
    }
}
export const getDataHistoryWatch = () => async (dispatch) => {
    try {
      const jsonValue = await AsyncStorage.getItem('HISTORY_WATCH');
      const data = jsonValue != null ? JSON.parse(jsonValue) : [];
      dispatch(setDataHistoryWatch(data));
    } catch (e) {
      console.log(e);
    }
  };
export const addToHistoryWatch = (data) => {
    return{
        type:'ADD_TO_HISTORY_WATCH',
        payload:data
    }
}
export const removeHistoryWatch = () => {
    return{
        type:'REMOVE_HISTORY_WATCH',
    }
}
