
const selectEntryReducerDefaultState = {}

const selectEntryReducer = (state = selectEntryReducerDefaultState, action) => {
    switch(action.type){
        case 'SELECT_ENTRY':
            return {
               id: action.id
            }
        default:
            return state;
    }
}

export default selectEntryReducer;