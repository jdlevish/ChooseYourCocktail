const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DRINKS':
            return {
                ...state,
                Drinks: action.payload
            };
        case 'SET_FAVORITES':
            return {
                ...state,
                Favorites: action.payload
            };
            case 'ADD_FAVORITE':
                return {
                    ...state,
                    Favorites: state.Favorites.concat(action.payload)
                };
                case 'DELETE_FAVORITE':
                    const Fave = state.Favorites
                    const index = state.Favorites.indexOf(action.payload)
                    if(index > -1){
                      Fave.splice(index, 1)
                    }
                return {
                    ...state,
                    Favorites: Fave
                };
        default:
            return state;
    }
};

export default Reducer;