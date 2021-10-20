import AsyncStorage from '@react-native-async-storage/async-storage';
const initState =[]

const historyWatch = (state = initState, action) => {
  switch (action.type) {
     case 'SET_DATA_HISTORY_WATCH':
        return action.payload
      case 'ADD_TO_HISTORY_WATCH':
        const data = [...state]
        var indexAnime = state.findIndex(x => x.slug === action.payload.slug )
        if(indexAnime === -1){
            data.unshift(action.payload);
            AsyncStorage.setItem('HISTORY_WATCH', JSON.stringify([...data]));
        }
        else{
            var indexEpisodes = state.findIndex(x => x.lastWatched.slug === action.payload.lastWatched.slug )
            if(indexEpisodes === -1) {
                data.splice(indexAnime, 1);
                data.unshift(action.payload);
                AsyncStorage.setItem('HISTORY_WATCH', JSON.stringify([...data]));
            }
        }
        return data
    case 'REMOVE_HISTORY_WATCH':
        AsyncStorage.setItem('HISTORY_WATCH', JSON.stringify([]));
        return []
    default:
      return state;
  }
};

export default historyWatch;