const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_DRINKS':
            return {
                ...state,
                Drinks: action.payload
            };

        default:
            return state;
    }
};

export default Reducer;