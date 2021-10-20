import AsyncStorage from '@react-native-async-storage/async-storage';
const initStateBookmarks =[]

const bookmarks = (state = initStateBookmarks, action) => {
  switch (action.type) {
     case 'SET_DATA_BOOKMARKS':
        return action.payload
    case 'ADD_TO_BOOKMARKS':
        var index = state.findIndex(x => x.slug === action.payload.slug )
        const data = [...state]
        if(index === -1) {
            data.unshift(action.payload);
            AsyncStorage.setItem('BOOKMARKS', JSON.stringify([...data]));
        }
        return data
    case 'REMOVE_ITEM_TO_BOOKMARKS':
        var index = state.findIndex(x => x.slug === action.payload.slug )
        const dataNew = [...state]
        if(index !== -1) {
            dataNew.splice(index,1);
            AsyncStorage.setItem('BOOKMARKS', JSON.stringify([...dataNew]));
        }
        return dataNew
    case 'REMOVE_BOOKMARKS':
        AsyncStorage.setItem('BOOKMARKS', JSON.stringify([]));
        return []
    default:
      return state;
  }
};

export default bookmarks;